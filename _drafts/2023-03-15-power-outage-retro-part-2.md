---
layout: default
title: "Power Outages 9 & 12 March 2023: Retrospective (Part 2)"
categories: networking
---

This post represents the second of a two part mini-series retrospecting on [the widespread power outages in Sussex on 9 and 12 March 2023, which affected over 35,000 homes](https://www.bbc.co.uk/news/uk-england-sussex-64933050) (including mine!).
In this part I'll be thinking about what changes I could make to improve my resiliency against future power outages.

One of the more alarming aspects of the power outage was the [limited amount of power redundancy for mobile network masts](https://www.standard.co.uk/tech/power-cuts-sussex-london-mobile-phones-burgess-hill-b1067548.html) -- I observed no signal throughout most of my town on the EE, Three, and O2 networks. This increased my reliance on [WiFi calling](https://en.wikipedia.org/wiki/Generic_Access_Network) for phone calls. It is unclear if the cellular network would've successfully connected an emergency call. My ISP, Swish Fibre, have confirmed that their cabinets "typically have around 4 hours of reserve power via battery back up", and that if this runs low they "have on call engineers who are tasked to sites where petrol generators are required".

As alluded to in [my previous post](/2023/power-outage-retro-part-1), I have an [APC Back-UPS](https://www.apc.com/uk/en/product/BE850G2-UK/apc-backups-850va-230v-usb-typec-and-a-charging-ports-8-bs-1363-outlets-2-surge/) protecting the more important equipment in my networking cupboard (my ONT, my router, and my primary switch which supplies my main WiFi access point via Power over Ethernet). [`apcupsd`](https://wiki.debian.org/apcupsd) reports:

```
$ apcaccess
[...]
MODEL    : Back-UPS ES 850G2
STATUS   : ONLINE
LINEV    : 245.0 Volts
LOADPCT  : 13.0 Percent
BCHARGE  : 100.0 Percent
TIMELEFT : 24.7 Minutes
[...]
BATTDATE : 2020-07-03
NOMINV   : 230 Volts
NOMBATTV : 12.0 Volts
NOMPOWER : 520 Watts
[...]
```

The devices which the UPS is protecting are drawing 68 watts (13% of the 520W "nominal power"). It lasted for a little over 20 minutes. This is a shorter runtime than it originally supported, probably due to a combination of battery aging and power expansion (e.g. now I have a multi-gigabit switch). Nevertheless, the UPS does an excellent job at protecting me from short power outages (lasting 10 minutes or less).

<style>
  ol {
    list-style: lower-alpha;
  }
</style>

For longer term power outages, I have a series of back-up plans:
0. Wait for the power outage to resolve itself. This failed due to the scope of the outage (it was clear that I didn't have enough battery runtime to wait for the outage to be resolved).
0. Travel to an alternative location within the same town (approximately 1 mile / 3 minutes drive). This failed because this alternative location was also affected by the outage.
0. Travel to an alternative location in a nearby town (apprixmately 5 miles / 12 minutes drive). This failed for the same reason.
0. Travel to an alternative location in a different county (approximately 45 miles / 50 minutes drive). I actually have two options here, both of which can accommodate my partner and I overnight if required. While my hosts appreciate advance warning, this isn't strictly required.

I've since discovered a new location for "plan c" which has standby generators, hopefully reducing my reliance on "plan d".

Additionally, to try and reduce my reliance on "plan b" I've...

https://www.photonicuniverse.com/en/catalog/full/556-1kW-Uninterrupted-Power-Supply-UPS-System-with-12kWh-energy-storage.html

https://ctechipower.com/products/ctechi-gt200pro-320wh-200w-portable-power-station?variant=40940035145865

From 96% to 26% (i.e. 70% discharge) in 122 minutes... Total runtime ~174 minutes or 2 hours 54 minutes.
