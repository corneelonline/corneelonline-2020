---
draft: true
tags:
- JAMstack
title: 'JAMstack: de methode voor snelle en veilige websites'
banner_image: ''
date_published: 
seo_title: 'JAMstack: de methode voor snelle en veilige websites'
seo_description: 'De JAMstack is geen specifieke set tools, maar een nieuwe, moderne manier om websites en apps te bouwen.'

---
De JAMstack is geen specifieke set tools, maar een nieuwe, moderne manier om websites en apps te bouwen. Waar komt "J-A-M" vandaan? Van deze drie kernconcepten:

**JavaScript**: dynamische functionaliteiten worden afgehandeld door JavaScript, een programmeertaal die door alle browsers wordt ondersteund. Er is geen beperking op welk framework of bibliotheek er wordt gebruikt.

**API's**: alle server-side functies of database-acties (denk aan opvragen of opslaan van content) worden aangeboden in herbruikbare API's, toegankelijk via HTTPS met Javascript. Voorbeeld: een headless CMS maakt zelf geen pagina's aan, maar biedt de content via een API aan zodat deze verwerkt kan worden in een website of webapplicatie.

**Markup**: websites worden aangeboden als statische HTML-bestanden. Deze kunnen worden gegenereerd op basis van bronbestanden, zoals Markdown, met behulp van een Static Site Generator. Markup zorgt voor de lay-out van een website, maar niet voor de content. Die wordt met behulp van de API ergens anders vandaan gehaald.

## Super goed. Maar wat betekent het allemaal in de praktijk?

Het gebruik van een traditioneel gekoppeld CMS (zoals WordPress) was lange tijd de norm: een compleet systeem om content aan te maken, pagina's in te richten. Het gaf klanten de autonomie om hun site te beheren.

Maar dat was 5+ jaar geleden.

Talloze ontwikkelaars hebben sindsdien de pijn gevoeld van het werken met CMS. We werden ons ervan bewust dat traditionele CMS'en (WordPress, Drupal) gewoon ... te veel probeerden te doen. We realiseerden ons hoe omslachtig ze waren. Hoe eigenwijs. De gebruiksvriendelijke admins begonnen steeds minder vriendelijk te voelen.

Dankzij moderne browsers, Static Site Generators, CDN's en API's zien we webontwikkelaars nu overstappen van dynamische server-side applicaties naar modulaire client-side stacks.

## Het verschil tussen een traditionele website en een JAMstack website

Als een bezoeker op een traditionele website komt en een URL opvraagt, dan gaat er op dat moment een heel proces van start: de inhoud van de pagina wordt opgehaald uit de database en deze wordt vervolgens verwerkt in de pagina template, waarna het geheel als HTML-pagina wordt opgedient. Afhankelijk van de kwaliteit van de hosting-provider en eventuele caching kan dit vrij snel, maar er treedt altijd een kleine vertraging op voordat de pagina in de browser verschijnt.

Bij een JAMstack website vindt dit hele proces vooraf al plaats en wordt alleen het eindresultaat op de server geplaatst: de kant-en-klare webpagina. Op het moment dat een bezoeker een pagina opvraagt is deze ook direct beschikbaar. De zogenaamde Static Site Generator zorgt hiervoor en tijdens het generatieproces vinden ook nog allerlei optimalisaties plaats, waardoor de website razendsnel wordt.

## De voordelen van JAMstack

Het werken met JAMstack heeft een paar duidelijke voordelen:

### Snellere websites
De pagina's worden vooraf gebouwd en geoptimaliseerd. Je hoeft niet meer te wachten tot de pagina op de server wordt opgebouwd. Snelheid is ook nog eens een SEO-factor en een snelle website kan de vindbaarheid dus positief beïnvloeden.

### Veiligheid
Een JAMstack website heeft geen database die gehackt kan worden. Verder zijn er geen afhankelijkheden van een webserver of plugins. Hierdoor hoef je je geen zorgen te maken over eventuele kwetsbaarheden.

### CDN (Content Delivery Network)
Door de website op een CDN (Content Delivery Network) te plaatsen is een kopie van de site beschikbaar in de buurt van jouw locatie. Verschillende kopieën van de website worden verspreid over servers over de hele wereld, waardoor een bezoeker uit Australië niet hoeft te wachten op webpagina's op een Nederlandse server. Dit komt de snelheid ten goede.

Daarnaast verbetert het de veiligheid. Bij een DDOS aanval op een server kan de webstie gewoon vanaf een andere server worden geladen.

### Onderhoudsvrij
Een JAMstack website heeft geen constante aandacht nodig als deze eenmaal gelanceerd is. Er is geen constante stroom aan updates. Iedereen met een WordPress website weet wat ik bedoel.

Ook als een headless CMS gebruikt wordt zal dit in veel gevallen een abonnement op een cloudservice zijn. Zij zorgen ervoor dat hun systemen up-to-date zijn.

### Loskoppelen van CMS en frontend
De voor- en achterkant van de website zijn niet direct gekoppeld. De achterkant (de admin) kan een headless CMS zijn, maar ook bestaan uit simpele Markdown-bestanden. En voor deze bestanden zijn ook weer goede (GIT-based) CMS'en beschikbaar.

De voorkant, oftewel de website zelf wordt gegenereerd met de tool naar keuze. Afhankelijk van het developersteam kunnen verschillende technieken en frameworks worden gebruikt. En als je na een paar jaar een andere website wil, dan kan je de inhoud gewoon opnieuw gebruiken. Dit wordt in het vervolg van dit artikel nog verder toegelicht.

## Laat JAMstack werken voor jouw contentstrategie

Hier wordt het voor sommige bedrijven en organisaties pas echt interessant! Je kan JAMstack namelijk heel goed inzetten voor een robuuste contentstrategie.

Omdat de voor- en achterkant van de website losgekoppeld zijn is het veel eenvoudiger geworden om dezelfde content te hergebruiken op verschillende kanalen. Sommige bedrijven hebben niet alleen een website, maar ook een app, een shop, een subbrand, nieuwsbrieven, e-books of ander marketingkanaal. Alle content kan op dezelfde plek worden beheerd met een headless CMS en op verschillende manieren worden verspreid.

De marketingafdeling kan op 1 plek content creëren. Afhankelijk van het gekozen CMS zijn daarbij allerlei handige opties beschikbaar voor samenwerking en workflow. Afhankelijk van de behoefte kunnen er verschillende frontends gebouwd worden om de content te ontsluiten.

En stel dat je een nieuwe website of app wil laten bouwen, dan kan dat met behoud van dezelfde content, zonder dat er lastige migraties naar een ander systeem nodig zijn. 

## Voor alle duidelijkheid: statisch is nog steeds dynamisch

In de JAMstack workflow worden websites gebouwd met een Static Site Generator en is het resultaat een set statische webpagina's. Dat klinkt alsof deze pagina's zelf ook heel statisch zijn, zoals in het begin van het internet. Niets minder is waar.

Een JAMstack website kan gebruik maken van een hele verzameling aan services, zoals:

- formulieren
- shopping carts
- zoekmachines
- commentaar
- authenticatie

En nog veel meer: https://github.com/agarrharr/awesome-static-website-services

Daarnaast wordt volop gebruik gemaakt van Javascript en CSS waarmee de pagina's zelf kunnen voorzien van animaties en transities voor een prettige interactie.

## Een mooie case: Smashing Magazine

Een hele mooie case op dit gebied is het verhaal van Smashing Magazine, al jaren een toonaangevend platform voor web developers wereldwijd. Zij hadden verschillende websites voor hun blog, een jobs board, een shop en een site voor conferenties. In dit (engelstalige) artikel staat uitgebreid beschreven: https://www.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here/.

welke overwegingen een rol speelden en wat het heeft opgeleverd.

## Zijn er ook nadelen?

Iedere werkwijze heeft zijn voor- en nadelen en ook JAMstack heeft zo zijn eigenaardigheden.

### Het is even wennen
Dit klinkt simpel, maar als je bijvoorbeeld een WordPress website gewend bent dan zijn er een aantal zaken anders. Allereerst zie je vrij snel het resultaat als je een pagina opslaat. De aanpassing is direct gepubliceerd en zichtbaar. Bij een aanpassing van een JAMstack website wordt de website opnieuw gegenereerd en naar de server gepushed. Dit process duurt iets langer en kan in eerste instantie voor verwaaring zorgen. Je ziet immers niet direct terug wat je net hebt opgeslagen. Het voordeel is weer dat jouw bezoekers een hele snelle webpagina krijgen.

### Preview van de webpagina
Dit hangt erg af van het gekozen headless CMS. Bij sommigen is het mogelijk om een preview van de pagina te krijgen die je aan het opmaken bent, maar in veel gevallen zie je alleen de velden waarmee de content wordt ingevoerd. Over het algemeen is er geen page builder of iets dergelijks beschikbaar. Persoonlijk vind ik dat een zegen, maar het kan wellicht een drempel vormen.

## Wat kost een JAMstack website?

Er wordt vaak beweerd dat een van de voordelen van JAMstack is dat het zo weinig kost. Dat klopt in sommige gevallen, maar gaat lang niet voor iedere situatie op. Ik zal dit met een paar voorbeelden toelichten.

### Gratis hosting
Voor een JAMstack website is geen uitgebreid hostingpakket nodig. Je kan bij Netlify (een fantastisch hostingplatvorm en uitvinder van de term JAMstack) een gratis account aanmaken en je website hosten. Dat werkt erg goed en Netlify biedt daarnaast ook nog hele prettige tools die je gratis kan gebruiken. Er zijn nog meer smaken, maar het hosten van een JAMstack website kan al voor een heel bescheiden bedrag.

### Het CMS
WordPress is gratis. De inspanning om een WordPress website te draaien zijn dit echter niet. Er is een redelijk stevig hostingpakket nodig en door de constante stroom aan updates ben je relatief veel tijd kwijt om alles bij te houden en je website up-to-date en veilig te houden. Ook moet je maatregelen nemen om je site te beschermen tegen kwaadwillenden.

Een headless CMS is er in heel veel verschillende soorten en maten. Veel van deze CMS'en hebben een gratis versie, waarmee je al goed uit de voeten kan, maar als je meer wil (aantal gebruikers en hoeveelheid content) dan kunnen de kosten serieus oplopen. Er zijn dus veel goede oplossingen die je gratis of voor een heel bescheiden bedrag kan gebruiken, maar met name voor grotere ondernemingen is dat niet vanzelfsprekend.

## Corneel Online en JAMstack

JAMstack is een fantastische ontwikkeling en Corneel Online zal bij het aannemen van een nieuwe opdracht altijd afwegen of deze werkwijze goed past bij jouw project. Het zal je dan ook niet verbazen dat deze website ook helemaal met JAMstack is gemaakt.

Het internet veranderd constant en met iedere verandering komen er steeds meer leuke en interessante mogelijkheden voor bedrijven om hun boodschap uit te dragen en voor web developers om dit op een goede manier te ondersteunen. JAMstack past daar wat mij betreft naadloos in.