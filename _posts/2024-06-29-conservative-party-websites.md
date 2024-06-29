---
layout: default
title: "Conservative Party Websites: Made In Britain?"
categories: politics
---

![A graphic showing the difference between double-storey and single-storey lowercase a](/{% ministamp { source_path: '_assets/img/bluetree-made-in-britain.png', destination_path: 'assets/img/bluetree-made-in-britain.png' } %} "The Made in Britain mark shown in the footer of a website promoting a Conservative Prospective Parliamentary candidate"){: .float-right}

When I was reviewing the website of my local Conservative [Prospective Parliamentary candidate](https://en.wikipedia.org/wiki/Prospective_parliamentary_candidate), I noticed that they were using the [Made in Britain collective mark](https://www.madeinbritain.org/about/the-collective-mark).
This surprised me, and it made me wonder: how much of a typical Conservative website is actually "Made in Britain"?
[The eligibility criteria mandated by Made in Britain](https://www.madeinbritain.org/apply/eligibility) state that "you must be a manufacturer making a finished digital product for which all of the development; the concept, the coding, quality control and maintenance takes place in Great Britain or Northern Ireland".
They go on to clarify that "One hundred per cent (100%) of the labour or human resource that makes the finished product that will carry the official trademark, is in Great Britain or Northern Ireland".

I discovered that approximately 1,000 websites affiliated with the Conservative Party were pointing to IPv4 address `83.138.188.248`.
This IP address is allocated to a global technology firm called [Rackspace](https://www.rackspace.com/).
[A measurement using RIPE Atlas suggests that the server allocated this IP address is within the UK](https://atlas.ripe.net/measurements/74525979), however Rackspace is headquartered in Texas, US, and the maintenance on this server and network is probably carried out by staff globally.

I found that the vast majority of these websites were using the [Drupal Content Management System](https://www.drupal.org/).
It's not clear how much of Drupal is developed in Great Britian or Northern Ireland, however [the activity for the code repository](https://git.drupalcode.org/project/drupal/activity) shows contributors from around the world.
[Drupal is a registered trademark](https://www.drupal.org/about/trademark) of [Dries Buytaert](https://dri.es/) who lives in Boston, US.

For typography the websites use [Google Fonts](https://fonts.google.com/) and [Adobe Fonts (formerly Typekit)](https://fonts.adobe.com/).
These are both global services.
The specific fonts used are [Open Sans](https://fonts.google.com/specimen/Open+Sans) designed by [Steve Matteson of Matteson Typographics](https://mattesontypographics.com/) (Colorado, US) and [Proxima Nova](https://fonts.adobe.com/fonts/proxima-nova) designed by [Mark Simonson of Mark Simonson Studio](https://www.marksimonson.com/) (Minnesota, US).

As part of their strategy to improve loading times, nearly all of the websites use a JavaScript library called [lazysizes](https://github.com/aFarkas/lazysizes).
It was developed by [Alexander Farkas](https://github.com/aFarkas), who lives in Berlin, Germany.

Around half of the websites use [Leaflet](https://leafletjs.com/), a JavaScript library for displaying interactive web maps.
Similar to Drupal, [Leaflet's code repository](https://github.com/Leaflet/Leaflet) features contributions from hundreds of individuals who come from various countries around the world.
Leaflet was originally created by [Volodymyr Agafonkin](https://agafonkin.com/) who lives in Kyiv, Ukraine.

To comply with [the cookie rules which are part of the Privacy and Electronic Communications Regulations](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/) the websites use [a Drupal module called `eu_cookie_compliance`](https://www.drupal.org/project/eu_cookie_compliance).
The [code repository includes contributions](https://git.drupalcode.org/project/eu-cookie-compliance/activity) from around the world.

I hope this blog post shows that great websites are usually built by a global team -- it's difficult to create a website which is exclusively made in a single country.

I reported this issue to the Made in Britain Campaign on 9th June 2024.
Since then around half of the websites have had the "Made in Britain" mark removed from the footer, although a number still display it.

Since I started writing this article [Bluetree has been added to Made in Britain's public membership directory](https://www.madeinbritain.org/members?q=Bluetree).
I shared this article with both the Made in Britain Campaign and Bluetree Website Services (Websites for the Conservative Party) and offered them the oppotunity to comment, neither have yet replied.
