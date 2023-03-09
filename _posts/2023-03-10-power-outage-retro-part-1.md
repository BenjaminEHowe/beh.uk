---
layout: default
title: "Power Outage 9 March 2023: Retrospective (Part 1)"
categories: networking
---

This post represents the first of a two part mini-series retrospecting on [the widespread power outages in Sussex on 9 March 2023, which affected over 35,000 homes](https://www.theargus.co.uk/news/23375679.outages-fixed-sussex-following-power-cuts/) (including mine!).
Specifically I'll be thinking about at how it affected me and how I could reduce the personal impact of a future outage.

## Timeline of events

All times are Greenwich Mean Time, and written using the 24 hour clock. All events happened on 9 March 2023.

0336: Sensors in my home stopped sending data over the internet. These sensors do not have any power backup, so stop working immedately when a power outage occurs.

0356: Sensors resume sending data (i.e. power is restored).

1001: Sensors again stop sending data.

1024: [updown.io](https://updown.io/r/AeUB9) reports that my home internet connection is offline (i.e. the Uninterruptable Power Supply protecting the connection has run out of power).

1258: updown.io reports that my home internet connection is back online.

1300: Sensors resume sending data.

## Brief Summary

My UPS systems acted as expected -- nothing went offline as a result of the first outage.
During the second outage I was actually on a video call -- the call was uninterrupted and I was able to share the situation with my colleague (and investigate how long the outage was likely to last).
I was a little surprised how quickly the UPS ran out of power, but my expectations may have been too high.

I was disappointed to discover that mobile signal throughout the town vanished within minutes of the power outage -- I expected mobile masts to have some sort of battery backup, with more critical masts possibly also having diesel generators.
[Ofcom's general condition A3.2](https://www.ofcom.org.uk/__data/assets/pdf_file/0030/238962/unofficial-consolidated-general-conditions-dec-2022.pdf) obliges networks to ensure that their services maintain "the fullest possible availability [...] in the event of catastrophic network breakdown or in cases of force majeure", and from my observations EE, Three, and O2 failed in this respect.
I've written to my MP to request this be investigated.
I think this is especially important given more people are relying on mobiles to make emergency calls in the event on a power outage, because [the traditional "landline" network is being switched off in 2025](https://business.bt.com/why-choose-bt/insights/digital-transformation/uk-pstn-switch-off/).
