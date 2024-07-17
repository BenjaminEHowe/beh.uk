import { USER_AGENT } from "../../../../functions-src/util";

// TODO: allow these values to be customised through request params
const NUM_SERVICES = 4;
const TIME_OFFSET = 5;

export async function onRequest(context) {  
  if (context.request.method !== "GET") {
    return new Response("Invalid request method", { status: 405 });
  }

  const crsLocation = context.params.departures[0];
  if (!crsLocation.match(CRS_REGEX)) {
    return new Response(`Invalid crsLocation: ${crsLocation}`, { status: 400 });
  }
  const crsFilter = context.params.departures[1];
  if (crsFilter && !crsFilter.match(CRS_REGEX)) {
    return new Response(`Invalid crsFilter: ${crsFilter}`, { status: 400 });
  }

  const params = { "timeOffset": TIME_OFFSET };
  if (crsFilter) {
    params["filterCrs"] = crsFilter;
  }
  const paramsString = new URLSearchParams(params).toString();
  const response = await fetch(new Request(`https://api1.raildata.org.uk/1010-live-departure-board-dep/LDBWS/api/20220120/GetDepBoardWithDetails/${crsLocation}?${paramsString}`, {
    headers: {
      "user-agent": USER_AGENT,
      "x-apikey": context.env.RAILDATA_LIVE_DEPARTURES_API_KEY,
    },
  }));
  const nreDepartures = await response.json();

  const data = {};
  data["location"] = nreDepartures["locationName"];
  if (crsFilter) {
    data["filterLocation"] = nreDepartures["filterLocationName"];
  }
  const tsRe = nreDepartures["generatedAt"].match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).\d*(\+\d{2}:\d{2})$/);
  data["generatedAt"] = `${tsRe[1]}-${tsRe[2]}-${tsRe[3]}T${tsRe[4]}:${tsRe[5]}:${tsRe[6]}${tsRe[7]}`;
  let services = [];
  if ("trainServices" in nreDepartures) {
    nreDepartures["trainServices"].forEach((nreService) => {
      const service = {};
      
      // verify that the service still calls at the filter station (if applicable)
      if (crsFilter) {
        const allCallingPoints = []
        nreService["subsequentCallingPoints"].forEach((callingPoints => {
          allCallingPoints.push(...callingPoints["callingPoint"]);
        }))
        const callingPoint = allCallingPoints.filter(cp => cp["crs"] === crsFilter)[0];
        if (callingPoint["isCancelled"]) {
          return;
        }
      }

      // cancellations
      service["cancelled"] = nreService["isCancelled"];
      if ("cancelReason" in nreService) {
        if (nreService["cancelReason"].includes(CANCEL_REASON_PREFIX)) {
          service["cancelReason"] = `Due to ${nreService["cancelReason"].substring(CANCEL_REASON_PREFIX.length)}`;
        } else {
          service["cancelReason"] = nreService["cancelReason"];
        }
      }

      // timings
      service["etd"] = nreService["etd"];
      service["std"] = nreService["std"];
      service["timeForSort"] = service["std"];
      if (service["etd"].includes(":")) {
        service["timeForSort"] = service["etd"];
      }

      // other bits
      service["destination"] = nreService["destination"][0]["locationName"]; // TODO: handle multiple destinations
      service["length"] = nreService["length"].toString();
      if (service["length"] === "0") {
        service["length"] = "?";
      }
      service["operator"] = nreService["operator"];
      service["operatorCode"] = nreService["operatorCode"];
      service["platform"] = "?";
      if ("platform" in nreService) {
        service["platform"] = nreService["platform"];
      }

      services.push(service);
    });
  }

  // sorting
  let servicesContainsEarlyMorning = false;
  let servicesContainsLateNight = false;
  services.forEach((service) => {
    const serviceHour = service["timeForSort"].split(":")[0];
    if (SERVICE_HOURS_EARLY_MORNING.includes(serviceHour)) {
      console.log("early morning found");
      servicesContainsEarlyMorning = true;
    } else if (SERVICE_HOURS_LATE_NIGHT.includes(serviceHour)) {
      console.log("late night found");
      servicesContainsLateNight = true;
    }
  });
  if (servicesContainsLateNight && servicesContainsEarlyMorning) {
    services.forEach((service, index) => {
      const serviceHour = service["timeForSort"].split(":")[0];
      const serviceMinute = service["timeForSort"].split(":")[1];
      if (SERVICE_HOURS_EARLY_MORNING.includes(serviceHour)) {
        services[index]["timeForSort"] = `${parseInt(serviceHour)+24}:${serviceMinute}`;
      }
    });
  }
  services.sort((a,b) => (a.timeForSort > b.timeForSort) ? 1 : ((b.timeForSort > a.timeForSort) ? -1 : 0));

  data["services"] = services.splice(0, NUM_SERVICES);
  return Response.json(data);
}

const CANCEL_REASON_PREFIX = "This train has been cancelled because of "
const CRS_REGEX = /^[A-Z]{3}$/;
const SERVICE_HOURS_EARLY_MORNING = ["00", "01", "02", "03"];
const SERVICE_HOURS_LATE_NIGHT = ["20", "21", "22", "23"];
