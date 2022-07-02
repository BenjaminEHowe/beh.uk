---
layout: default
title: "Full Fibre Broadband FAQs"
categories: networking
---

I've written this blog post because I've had a number of people ask me questions about "full fibre" broadband. I'm hoping that it'll answer some common questions, as well as perhaps helping readers consider things which they hadn't previously thought of.

## Openreach are installing "full fibre" in my area -- what does this mean for me?

Full fibre networks (built by Openreach and other companies) are the first large-scale networks designed for connecting homes to the internet. Although most homes already have internet connections, these commonly use lines from Openreach or Virgin Media. Openreach's lines which were originally designed for telephones, and Virgin's were originally designed for TV. In the [March 2021 measurement period Ofcom found that the average (median) download speed was 50.4Mb/s](https://www.ofcom.org.uk/research-and-data/telecoms-research/broadband-research/broadband-speeds/uk-home-broadband-performance-march-2021) -- whereas most consumer full fibre services are capable of delivering speeds of 1,000Mb/s or more.

[Openreach are aiming to cover 25 million premises by the end of 2026](https://www.ispreview.co.uk/index.php/2021/05/bt-raise-fttp-broadband-target-to-25-million-uk-premises.html). This is an ambitious target given that their telephone network was gradually built over several decades, so it's likely that you'll notice an increase in roadworks as Openreach ensure their ducts are clear and install the new fibres.

## Don't I already have fibre?

Most homes use some sort of "fibre to the cabinet" technology, with a copper cable of some description connecting the home. These connections are often marketted as "fibre", in line with [the ASA's policy that part-fibre broadband may be described as "fibre"](https://www.asa.org.uk/news/asa-concludes-review-of-fibre-broadband.html). Personally I think this is misleading, as practically any internet connection could be described as "part-fibre" (including, for example, dial-up), because the vast majority of internet exchanges and backhaul providers interconnect exclusively using fibre.

Unfortunately the part-fibre services available to the majority of UK premises have a maximum theoretical speed of 80Mb/s, which degrades with distance. Full fibre does not degrade in a material way with distance, and is capable of going much faster -- [Nokia and Vodafone have trialled 100Gb speeds using the same full fibre technology as is being installed today](https://www.nokia.com/about-us/news/releases/2021/02/02/nokia-and-vodafone-showcase-record-breaking-100-gigabit-fiber-broadband/), the only difference being a change in the equipment on either end of the fibre.

## Where will the cables go?

In most cases the cables will follow the same route as your existing copper cables -- using your existing underground duct or telegraph pole. In rare cases your telephone line might be burried "direct in ground" (i.e. not inside a duct) -- in this case a new duct might be dug, or telegraph poles might be used. If the fibre will be brought to your property underground, then a "toby box" will sometimes be installed at the edge of the pavement, ready to bring the fibre to your home when you place an order.

Multi-Dwelling Units (MDUs) such as appartment blocks have an added complication, as the cables need to travel through common areas (usually owned by a freeholder) in order to get to the individual appartments. Permission for this is granted using a "wayleave". Sometimes the freeholder is the collective of leaseholders (appartment owners), and other times the freeholder is an investor who bought the freehold to profit from the ground rent. Part of the wayleave agreement includes agreeing how the fibre will connect between the street and the individual appartments -- often the existing ducts can be used. 

## Where will the fibre appear in my property?

- probably where the existing master socket is!
- note on special installation services / internal cabling

## How does full fibre affect my landline telephone?

- it's complicated -- unlike FTTC, FTTP doesn't use a telephone line
- end of conventional "telephone" lines in 2025 regardless
- telephone using mobile
- telephone using ISP
- telephone using VoIP

## Why are different companies digging up the roads to install fibre?

- competition
- consolidation
- PIA

## I don't need more speed -- why should I care about full fibre?

- "you get what you pay for"
- reduced latency
- reduced jitter
- fewer faults

## Which speed should I order?

- highlight the openreach packages (and that altnets vary)
- 50Mb per person download and 10mb per person upload
- limitations of wifi

## Does full fibre help with working from home?

_this section will both highlight the increased reliability of full fibre and the limitations of "broadband" style products_

- increased reliability
- existing SLAs apply
- contention
- improvement using 4G
- alternatively use a leased line

## Is full fibre more expensive than my current broadband?

- often the same price
- lower operating costs
- Openreach Equinox offer
- altnets might be cheaper!
