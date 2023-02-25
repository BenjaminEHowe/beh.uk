---
layout: default
title: "Swish Fibre: An Early Review"
categories: networking
---

My home was recently connected to [Swish Fibre's new network in Haywards Heath](https://www.swishfibre.com/locations/haywards-heath), so I thought I'd share my thoughts on their product.

I took their "Swish 900" residential package which promises download _and upload_ speeds of 900Mbps.
As expected I get speeds in excess of 900Mbps when testing with [Ookla's Speedtest.net](https://www.speedtest.net/).
This isn't just against Swish's own server, but also other nearby servers (e.g. [Mythic Beasts](https://www.mythic-beasts.com/)).
Initially I measured speeds of 946Mbps, matching up with the [expected throughput on gigabit ethernet](https://rickardnobel.se/actual-throughput-on-gigabit-ethernet/).
I then decided to try upgrading the SFP+ WAN interface on my router from one gigabit to ten gigabits and I was surprised to see even faster speeds of over 1,100Mbps!
Swish's symmetrical speeds are refreshing as internet connections from Openreach-based providers and Virgin Media are heavily asymmetrical -- for example, at the time of writing the fastest broadband connection offered by Virgin only had an upload speed of 52Mbps.

[![Speedtest.net result indicating speeds to Mythic Beasts of 946Mbps](https://cdn.beh.uk/img/speedtest-swish.png){: .centred}](https://www.speedtest.net/result/d/1cdb2c18-456a-4135-9205-bc313ba56f98)

Internet connections aren't just about speed though -- latency is important too (ask gamers or people trying to use remote desktop software, for example).
I host a [RIPE Atlas](https://atlas.ripe.net/) probe ([ID 1002782](https://atlas.ripe.net/probes/1002782)) on my network.
It takes independent measurements of the wider internet from the perspective of my internet provider.
Swish's network is superior in this aspect too: when I switched my network connection from [IDNet](https://www.idnet.com/) (using Openreach) to Swish, I saw reductions in latency across the board.
For example, the latency to the [d-root nameserver](http://d.root-servers.org/) reduce from a median of 9.1ms to a median of 4.6ms.

[![RIPE Atlas measurement showing latency to the "d" root nameserver on the day that the Swish internet connection was installed](https://cdn.beh.uk/img/latency-swish.png){: .centred}](https://stat.ripe.net/widget/atlas-ping-measurements#w.mode=condensed&w.measurement_id=1012&w.probe_id=1002782&w.starttime=2023-02-13T08%3A39%3A06&w.endtime=2023-02-14T00%3A00%3A27&w.resolution=0)

Swish provide two pieces of equipment to facilitate connection to their network: an Optical Network Terminal (I got a Swish-branded [Adtran 622v](https://portal.adtran.com/pub/Library/Data_Sheets/International_/I61287842Fx-8A_ADTRAN_622v.pdf)) and a [Plume SuperPod router](https://www.swishfibre.com/swish-home-wi-fi) (you don't need to pay Plume's membership fee).
That said, I don't use their router as I've already fitted my home with ceiling-mounted wireless access points from Ubiquiti.
Using my own router couldn't be easier as Swish use DHCP (no PPPoE or other configuration required).
The engineers who completed the installation did a great job -- I was able to have everything hidden in the cupboard with my other networking equipment, and the fibre optic cable was run neatly above the door frames.
I didn't cancel my old broadband connection until I'd tested that the new connection was working -- this gave me peace of mind during the switchover process.

So far I've been very positive -- and with good reason, overall I'm impressed with Swish's service.
That said, I think there's a significant (if not somewhat nerdy) area where their service could be enhanced.
By default Swish use Carrier-Grade NAT for IPv4, and charge £3 per month for a public IP address.
This isn't unreasonable as [IPv4 addresses are running out](https://www.ripe.net/manage-ips-and-asns/ipv4/ipv4-run-out), however [Swish do not offer IPv6](https://twitter.com/SwishFibre/status/1369323345163018255), the long term solution to IPv4 exhaustion.
In my opinion this is poor -- [the first IPv6 specification](https://www.rfc-editor.org/rfc/rfc1883) was published in 1995 so any new internet provider should support it immediately.

In summary I think Swish's service is an excellent upgrade from services offered by Openreach-based providers or Virgin Media.
I look forward to seeing how the market evolves, both as [Swish is consolidated as part of Fern Fibre's family of networks](https://www.ispreview.co.uk/index.php/2023/02/fern-consolidates-uk-isps-jurassic-fibre-swish-fibre-giganet-and-allpoints-fibre.html) and as more providers build throughout the UK.
