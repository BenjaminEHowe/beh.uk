---
layout: default
title: "Full Fibre Internet FAQs"
categories: networking
---

I've written this blog post because I've had several people ask me questions about "full fibre" internet. I'm hoping that it'll answer some common questions, as well as perhaps help readers consider things which they hadn't previously thought of.

## Openreach are installing "full fibre" in my area -- what does this mean for me?

Full fibre networks (built by BT Openreach and other companies) are the first large-scale networks designed for connecting homes to the internet. Although most homes already have internet connections, these commonly use lines from BT Openreach or Virgin Media. Most of Openreach's lines were originally designed for telephones, and Virgin's were originally designed for TV. In the [March 2021 measurement period, Ofcom found that the average (median) download speed was 50.4Mb/s](https://www.ofcom.org.uk/research-and-data/telecoms-research/broadband-research/broadband-speeds/uk-home-broadband-performance-march-2021) -- whereas most consumer full fibre services are capable of delivering speeds of 1,000Mb/s or more.

[Openreach are aiming to cover 25 million premises by the end of 2026](https://www.ispreview.co.uk/index.php/2021/05/bt-raise-fttp-broadband-target-to-25-million-uk-premises.html). This is an ambitious target given that their telephone network was gradually built over several decades, so you'll likely notice an increase in roadworks as Openreach ensure their ducts are clear and install the new fibres.

## Don't I already have fibre?

Most homes use some sort of "fibre to the cabinet" technology, with a copper cable of some description connecting the home. These connections are often marketed as "fibre", in line with [the ASA's policy that part-fibre broadband internet may be described as "fibre"](https://www.asa.org.uk/news/asa-concludes-review-of-fibre-broadband.html). I think this is misleading because practically any internet connection could be described as "part-fibre" (including, for example, dial-up) as the vast majority of internet exchanges and backhaul providers interconnect exclusively using fibre.

Unfortunately, the part-fibre services available to the majority of UK premises have a maximum theoretical speed of 80Mb/s, which degrades with distance. Full fibre does not materially degrade with distance and is capable of going much faster -- [Nokia and Vodafone have trialled 100,000Mb speeds using the same full fibre technology as is being installed today](https://www.nokia.com/about-us/news/releases/2021/02/02/nokia-and-vodafone-showcase-record-breaking-100-gigabit-fiber-broadband/), the only change being different equipment on either end of the fibre.

## Where will the fibre go?

In most cases, the fibre will follow the same route as your existing copper cables -- using your existing underground duct or telegraph pole. In rare cases your telephone line might be buried "direct in ground" (i.e. not inside a duct) -- if this is the case then a new duct might be dug, or telegraph poles might be used. If the fibre will be brought to your property underground, then a "toby box" will sometimes be installed at the edge of the pavement, ready to bring the fibre to your home when you place an order.

"Multi-Dwelling Units" (MDUs) such as apartment blocks have an added complication, as the fibres need to travel through common areas (usually owned by a freeholder) to get to the individual apartments. Permission for this is granted using a "wayleave". Sometimes the freeholder is the collective of leaseholders (apartment owners), and other times the freeholder is an investor who bought the freehold to profit from the ground rent. Part of the wayleave agreement includes agreeing how the fibre will connect between the street and the individual apartments -- often the existing ducts can be used. 

## Where will the fibre appear in my property?

In most cases, the fibre will enter your property in the same place as your BT master socket. This is probably where your router is plugged in. If the fibre is not using a pre-existing duct then it will likely appear on a wall towards the front of the property, although you should have the opportunity to discuss locations with the engineer before they start work.

Your internet provider has the option of ordering ["standard" or "premium" installation from Openreach](https://www.openreach.co.uk/cpportal/products/fibre-broadband/installation-options). Standard installation allows for up to 10 metres of internal fibre (to the nearest electrical socket), whereas premium installation allows for up to 30 metres of internal fibre. An "Optical Network Terminal" (ONT) will then be wall-mounted and connected to your router using a short ethernet cable (this can be replaced with a longer one after the installation if required, up to the standard ethernet cable length limit of 90 metres).

## How does full fibre affect my landline telephone?

Full fibre does not come with a telephone line by "default". That being said, telephone services will stop being available via your "standard" telephone socket by 2025 at the latest, when [the UK's Public-Switched Telephone Network (PSTN) is switched off](https://business.bt.com/why-choose-bt/insights/digital-transformation/uk-pstn-switch-off/). This will happen regardless of if you have full fibre available -- your telephone socket will only be used for an internet connection (and your internal telephone wiring may no longer function unless an engineer installs "Voice Reinjection", sometimes called VRI). For customers who only want telephone service, a 0.5Mb/s internet option will be available -- this is enough capacity for approximately 4 simultaneous voice calls.

After the PSTN has been switched off, there are a few options for telephone services: using a mobile service, taking a service from your internet provider, or using an independent "Voice over Internet Protocol" (VoIP) service. Unless you're planning on using a mobile, you'll likely be able to keep your existing landline number, although **this may require you to order your full fibre as a "new" connection rather than "upgrading" your existing connection**.

Most mobile phone deals come with a large number of included minutes, so the first option would be to rely on mobile phones. If you want to use a "traditional" phone interface then you can use a device like the [Tenda 4G06](https://www.tendacn.com/product/4G06.html) along with a suitable SIM card. I'd suggest 1pMobile as they charge 1p per minute or offer a "bundle" including unlimited calls for £36 per year -- plus if you visit [their "friends" page](https://www.1pmobile.com/friends/) and enter code H198286B then you'll get £5 of free credit.

A second option for a "landline telephone" would be to ask for your internet provider to also provide a telephone service. Many internet providers offer this, for example, at the time of writing BT charged £5 per month for a "pay as you go" service or £16 per month for unlimited minutes. This service is often provided by plugging your telephone into your router. Note that this service will usually require you to use the router given to you by your internet provider, and the "bundling" of your internet and telephone services might make it more difficult to switch to a provider which doesn't offer telephone service in future.

The third option is to use a VoIP telephone service, such as from [Sipgate](https://www.sipgate.co.uk/) or [Andrews & Arnold](https://www.aa.net.uk/voice-and-mobile/voip-information/use-cases/home-user/). I think this option is most elegant, as you can independently control your telephone and internet services. You can also choose how you use your phone service -- using a "soft" phone on a computer or smartphone, using a phone which is compatible with the "SIP" VoIP system, or using an adapter box compatible with the "SIP" VoIP system along with a conventional phone. Most VoIP services will allow you to use connect multiple separate phones (including soft phones), with them all ringing at the same time when a call comes in.

## Why are different companies digging up the roads to install fibre?

While Openreach are the largest network installing full fibre to homes, other networks are offering the same services. The largest "alternative networks" are probably [Virgin Media](https://www.virginmedia.com/broadband/postcode-checker) and [CityFibre](https://cityfibre.com/about-us/rollout), but there are [over 100 smaller networks that have been granted "code powers" by Ofcom](https://www.ofcom.org.uk/phones-telecoms-and-internet/information-for-industry/policy/electronic-comm-code/register-of-persons-with-powers-under-the-electronic-communications-code).

While this might be slightly inconvenient while the building work is taking place, overall it's great news for making sure that consumers can order innovative products at affordable prices -- a substantial number of alternative networks offer lower prices and/or faster speeds than Openreach-based internet providers. A particular feature which is common among alternative networks is "symmetrical speeds" -- this means that you can send data to the internet as quickly as you can receive it. Symmetrical speeds are really helpful for things like working from home or online backups and aren't available with "standard" products from providers using Openreach or Virgin Media.

To minimise expensive and inconvenient roadworks, a substantial number of networks use [Openerach's Physical Infrastructure Access (PIA) product](https://www.openreach.co.uk/cpportal/products/passive-products/physical-infrastructure-access(PIA)). This allows networks to place their own fibres (or sub-ducts) inside Openreach's existing ducts, reducing or preventing the need to dig. 

Longer-term the market is likely to consolidate to a smaller number of networks, as was the case with [the cable television companies](https://en.wikipedia.org/wiki/Timeline_of_cable_television_in_the_United_Kingdom).

## I don't need more speed -- why should I care about full fibre?

Full fibre has a large number of benefits over part-fibre internet, even if you plan to continue with the same package speed:

- You'll get the speed that you're paying for, even if you're a long way from your nearest cabinet or telephone exchange.
- You won't be at risk of electrical surges coming via the telephone line, as fibre optic cables are made from plastic or glass and don't conduct electricity.
- Full fibre internet has reduced latency and jitter, improving your internet experience, especially video calls or online gaming.
- Full fibre connections typically suffer fewer faults, as the technology is purpose-built to deliver a reliable internet connection.

## Which speed should I order?

Full fibre internet connections offer a range of speeds, and unlike part fibre distance from the cabinet or exchange is not a limiting factor.

The standard speeds that Openreach offer on their network are:

- 0.5Mb/s (symmetrical)
- 40Mb/s down & 10Mb/s up
- 80Mb/s down & 20Mb/s up
- 115Mb/s down and 20Mb/s up
- 160Mb/s down and 30Mb/s up
- 220Mb/s down and 30Mb/s up
- 330Mb/s down and 50Mb/s up
- 550Mb/s down and 75Mb/s up
- 1,000Mb/s down and 115Mb/s up
- 550Mb/s down and 165Mb/s up (business-focussed product, expensive)
- 1,000Mb/s down and 220Mb/s up (business-focussed product, expensive)

Note that internet providers typically don't offer all of these options, and [a small number (less than 50,000) of older Openreach full fibre connections are limited to 330Mb/s](https://www.ispreview.co.uk/index.php/2022/06/openreach-still-coy-on-plan-to-fix-330mbps-capped-uk-fttp-lines.html). Alternative internet networks (such as [CityFibre](https://cityfibre.com/about-us/rollout) and [Hyperoptic](https://www.hyperoptic.com/map/?residential)) offer different speed tiers, and often offer symmetrical speeds (i.e. the same speed down and up).

As a general rule of thumb, I suggest allowing 40Mb/s of download speed per person and 10Mb/s of upload speed per person. This means you should consider:

- The 40Mb/s package for single-person households
- The 80Mb/s package for two-person households
- The 160Mb/s package for three-person households
- The 330Mb/s package for four-person households
- The 550Mb/s package for larger households

It may be wise to select a speed faster than 80Mb/s to "force" the internet provider to use full fibre.

It's worth highlighting that 1,000Mb speeds will only be available if you can connect your device to the router using an ethernet cable -- it's difficult to exceed 300Mb/s via WiFi. This may impact your choice of speed.

## Does full fibre help with working from home?

The increased speed and reliability of full fibre broadband internet is useful when working from home, but it's worth highlighting that full fibre is **not** equivalent to a leased line.

- Broadband connections typically have an SLA for repairing faults of 40 hours, whereas the SLAs for leased lines are lower.
- Broadband connections are typically (relatively) heavily contended (e.g. Openreach full fibre typically shares 2,400Mb/s of capacity between up to 32 users), whereas leased lines are sold as uncontended.
- Leased lines typically offer symmetrical speeds, whereas Openreach-based broadband connections have slower upload speeds than download speeds.

The reliability of an internet connection can be enhanced by adding "redundancy", such as using a router with automatic 4G failover (such as the [Asus 4G-AX56](https://www.asus.com/Networking-IoT-Servers/Modem-Routers/All-series/4G-AX56/)), or a second leased line using "Resilience Option 2" to ensure that the lines follow diverse routes wherever possible.

## Is full fibre more expensive than my current internet?

No. Full fibre is often the same price as the equivalent part fibre package, as the cost of operating a full fibre network is less than operating a network using copper cabling. For example, the power consumption is reduced, and [unlike copper, fibre optic cable has no value to thieves](https://www.ispreview.co.uk/index.php/2022/05/openreach-cable-theft-knocks-out-broadband-in-part-of-wrexham.html). As a result of this, Openreach offeres internet providers substantial discounts under their ["Equinox Offer"](https://www.ispreview.co.uk/index.php/2021/07/openreach-unveil-major-fttp-pricing-offer-for-uk-broadband-isps.html) provided that 80% or more of an internet provider's customers take full fibre products (where these products are available).

Furthermore, some households have access to "alternative networks", which are often cheaper than Openreach-based networks.

## Conclusion

I hope this article will be useful when thinking about full fibre internet, and I welcome [feedback via my contact form](https://www.beh.uk/contact).
