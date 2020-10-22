---
tags:
- Development
- SEO
title: Moet je "www" gebruiken in je URL of niet?
main_image: https://res.cloudinary.com/corneel-online/image/upload/v1603361542/corneelonline/www-or-not_n2ouwz.jpg
date_published: 2017-08-28T22:00:00.000+00:00
seo_title: Moet je "www" gebruiken in je URL of niet?
seo_description: Het gebruik van “www" in de url kan verwarrend zijn voor veel website-eigenaren.
  Want moet je “www" nou wel of niet gebruiken? Of maakt het niet uit?
published: true

---
Het gebruik van "www" in de url kan verwarrend zijn voor veel website-eigenaren. Want moet je "www" nou wel of niet gebruiken? Of maakt het niet uit? Ik zal in dit artikel proberen om deze kwestie te verduidelijken.

### Wat betekent "www" eigenlijk?

"www" staat voor **World Wide Web**. Tegenwoordig is het niet meer nodig om dit in je URL te gebruiken, maar het kan geen kwaad en zoals je wel gemerkt zal hebben wordt het nog heel veel gebruikt. Technisch gezien is "www" het standaard subdomein waar je op binnenkomt.

### De onderdelen van een URL

Een URL is het webadres van de webpagina. Een URL bestaat uit verschillende onderdelen: `https://www.mijnwebsite.nl` De **domein extensie** is _".nl"_ Het **domein** is _"mijnwebsite.nl"_ Het _"www"_ gedeelte is een **subdomein** van het domein Het **protocol** is _"https://"_ De **host** of **hostname** is _"www.mijnwebsite.nl"_ Zoekmachines hebben het **protocol** en de **hostname** nodig om een website te identificeren.

### Het probleem met "www" in je URL

Neem dit voorbeeld:

*   http://mijnwebsite.nl
*   http://www.mijnwebsite.nl
*   https://mijnwebsite.nl
*   https://www.mijnwebsite.nl

Al deze URL’s leiden naar dezelfde inhoud. Het gevolg is dat een zoekmachine de pagina meerdere keren indexeert en dat de pagina onder verschillende webadressen in de zoekmachine te vinden is. Het probleem is kortom dat de zoekmachine niet weet wat nou de "echte" URL van de pagina is. Er is dan sprake van **duplicate content** en daar houden zoekmachines niet van. Het is nadeling voor de SEO, oftewel de vindbaarheid van je website.

### De oplossing: de Canonical URL

Om verwarring te voorkomen en de zoekmachine te laten weten weten welke pagina nou de "echte" pagina is wordt de zogenaamde **Canonical URL** gebruikt. De Canonical URL wordt opgenomen in de HEAD-sectie van de broncode en ziet er bijvoorbeeld zo uit: ![](https://www.corneelonline.nl/wp-content/uploads/2017/08/canonical-url.png) Hierdoor weet de zoekmachine: _"Dit is de enige versie van deze pagina en daarom moet deze geïndexeerd worden."_

### Voorkeursdomein in Google Search Console

Naast het toevoegen van een Canonical URL in de broncode kan je in **Google Search Console** aangeven welke variant de voorkeur heeft. ![](https://www.corneelonline.nl/wp-content/uploads/2017/08/google-search-cobnsole.png) Zo weet Google of de website met of zonder "www" wordt geïndexeerd.

### Meer weten?

Hoe is het bij jouw website geregeld? Als je het idee hebt dat er op dit punt nog wel wat verbeterd kan worden, neem dan gerust [contact](https://www.corneelonline.nl/contact/) met me op. Bronnen:

*   [Canonical URL: de ultieme handleiding](https://www.contentking.nl/academy/canonical/)
*   [Should You Use "www" In Your URL or Not?](https://ithemes.com/2017/01/09/www-in-url-domain/)