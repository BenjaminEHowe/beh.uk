export async function onRequest(context) {
  if (context.request.method !== "GET") {
    return new Response("Invalid request method", { status: 405 });
  }

  const submissionsQuery = await context.env.DB_FORMS.prepare("SELECT submission_id, form_id, submitted_ts, spam_reasons, json_extract(headers, '$.cf-connecting-ip') as ip, json_extract(cf, '$.asn') as asn, json_extract(cf, '$.country') as country FROM submissions WHERE submitted_ts > ?")
    .bind(
      new Date().subtractDays(30).toISOString(),
    )
    .all();
  const rows = submissionsQuery
    .results
    .map((row) => {
      row.spam_reasons = JSON.parse(row.spam_reasons);
      row.asn = row.asn.toString();
      return row;
    });

  return Response.json(submissionsQuery.results);
}

// TODO: this is bad practice, consider replacing (see https://www.reddit.com/r/learnjavascript/comments/qgtut6/comment/hi8jg6w/)
Date.prototype.subtractDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() - days);
  return date;
}
