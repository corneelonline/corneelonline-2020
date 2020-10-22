---
tags:
- CMS
- Development
- ProcessWire
title: ProcessWire CMS - Een goed alternatief voor WordPress?
main_image: https://res.cloudinary.com/corneel-online/image/upload/v1603361541/corneelonline/processwire-alt_u7onc4.jpg
date_published: 2018-08-28T22:00:00.000+00:00
seo_title: ProcessWire CMS - Een goed alternatief voor WordPress?
seo_description: ProcessWire CMS is een zeer volwassen content management systeem
  en een goed alternatief voor WordPress voor het ontwikkelen van maatwerk websites.
published: true

---
WordPress is het CMS (Content Management Systeem) waarmee ik verreweg de meeste opdrachten uitvoer. Ik vind het een uitstekende basis voor het bouwen van maatwerk websites, vooral omdat er voor bijna elke functionaliteit wel één of meerdere oplossingen bestaan in de vorm van plugins. Wil je een winkel, een membership website, een blog, een portfolio site, een fotografie website, een meertalige website? Met de juiste plugin is dit allemaal geen probleem. Tegelijkertijd valt er ook wel wat aan te merken op WordPress. Het CMS zelf is erg beperkt in zijn mogelijkheden en je bent al snel afhankelijk van allerlei plugins en thema’s voor functionaliteit die bij veel nieuwe CMS-en standaard wordt geleverd. En die plugins en thema’s krijgen zeer regelmatig updates, waardoor een WordPress website heel actief moet worden onderhouden. Achterstallig onderhoud kan de website kwetsbaar maken voor misbruik.

### Mijn criteria voor een goed CMS

Iedere websitebouwer heeft een eigen werkwijze. De een zweert bij een thema of framework van een bepaalde leverancier (zoals Divi of Genesis) met een visuele builder, de ander (waaronder ikzelf) gebruikt een kaal starter theme en bouwt daarmee een maatwerk website met een custom thema. Voor mijn werkwijze is het belangrijk dat ik makkelijk verschillende soorten content kan onderscheiden, verschillende pagina templates kan maken en deze kan voorzien van de velden die mijn klanten nodig hebben om de inhoud van de website makkelijk te kunnen onderhouden. Het gemak waarmee de updates kunnen worden uitgevoerd is van belang. Verder is het beveiligen van de website en het maken van backups een belangrijk punt. Dit alles is goed geregeld bij WordPress. En ook niet onbelangrijk: ik ben een PHP-programmeur, dus PHP onder de motorkap is een voorwaarde.

### Enkele alternatieven

Bij het zoeken naar een volwaardig alternatief voor WordPress heb ik een aantal CMS-en bekeken en uitgeprobeerd, de één wat uitgebreider dan de andere, en daarbij heb ik ze getoetst aan mijn criteria. Even een disclaimer: mijn korte mening over deze systemen is heel persoonlijk. Ik denk dat alle vermelde CMS-en zeer de moeite waard zijn, maar kan nu eenmaal beter met het ene systeem overweg dan met het andere. Hier enkele interessant CMS-en die de revue gepasseerd zijn: **ProcessWire** - [https://processwire.com/](https://processwire.com/) Mijn voorlopige winnaar. Hierover meer in het vervolg van dit artikel. **Drupal** - [https://www.drupal.org/](https://www.drupal.org/) De vorige versie van deze website was gebouwd met Drupal. Een mooi CMS, wel met een stevige leercurve. Ik vond het updaten van de website en het maken van pagina templates erg bewerkelijk. Daar tegenover staat dat veel andere onderdelen erg goed (en vaak beter dan in WordPress) geregeld zijn. Hoewel ik niet meer met Drupal werk vind ik het nog steeds een prachtig CMS. **Craft CMS** - [https://craftcms.com/](https://craftcms.com/) Craft is een heel volwassen CMS, ziet er schitterend uit, maar heeft wel een prijskaart van $299 per jaar per site en $59 per jaar voor updates. Hoewel deze kosten goed zijn te overzien heb ik er daarom nog niet uitgebreid mee gewerkt. Ziet er wel erg goed uit. **Grav** - [https://getgrav.org/](https://getgrav.org/) De kracht van Grav is dat het een CMS is zonder database. Het verhuizen van de website is daarom een stuk simpeler en de hele website kan in het versiebeheer worden opgenomen, wat weer veel voordelen biedt. Het CMS ziet er ook schitterend uit. **Statamic** - [https://statamic.com/](https://statamic.com/) Ook een CMS zonder database. Ziet er ook veelbelovend uit. Kost wel $199 per website. **Kirby** - [https://getkirby.com/](https://getkirby.com/) Ook een CMS zonder database. Dit CMS krijgt hele goede reviews. Ik kwam er niet mee op dreef. **October CMS** - [http://octobercms.com/](http://octobercms.com/) Ideaal CMS voor ontwikkelaars. Het geeft veel middelen om maatwerk te bouwen. Voor de klant is het andere koek. Hoewel ik er prettig mee kon bouwen vond ik het lastig om een admin te creëren waarmee mijn klanten intuïtief kunnen werken. Mooi CMS ook! **Pagekit** - [https://pagekit.com/](https://pagekit.com/) **Bolt** - [https://bolt.cm/](https://bolt.cm/) **Pyro CMS** - [https://pyrocms.com/](https://pyrocms.com/) Ook allemaal fijne CMS-en die het desondanks toch niet geworden zijn.

### ProcessWire CMS

Na veel uitproberen kwam ik bij ProcessWire uit, een open source CMS. ProcessWire biedt standaard veel functionaliteit en daarnaast is er een grote hoeveelheid modules (vergelijkbaar met plugins bij WordPress) beschikbaar om extra functionaliteit toe te voegen. Hun website is niet erg gepolijst, maar biedt wel een overvloed aan nuttige informatie.

### Waarom ProcessWire?

Het eerste dat opvalt is dat ProcessWire geen enkele aanname doet over wat voor soort website je wil maken. WordPress was van origine een blogsysteem dat is uitgegroeid tot een volwaardig CMS. Dat zie je op allerlei plekken nog terug. ProcessWire is heel minimaal en kan gebruikt worden voor kleine websites (zoals [watermulder.com](https://www.corneelonline.nl/portfolio/niels-watermulder/)) tot sites met duizenden pagina’s. Maar hoewel ProcessWire minimaal is, biedt het standaard wel de mogelijkheid om makkelijk velden aan te maken en deze aan pagina templates toe te voegen. Iets wat ik in de WordPress wereld oplos met ACF Pro, een commerciële plugin. Hier een paar redenen waarom ik voor ProcessWire gekozen heb:

#### 1\. Het CMS is gebaseerd op drie simpele basisconcepten: Pagina’s, Velden en Templates

Als je begrijpt hoe deze concepten werken, dan begrijp je het CMS en de filosofie erachter. Ik zal deze begrippen verder introduceren.

##### Pagina’s

Nadat ProcessWire geïnstalleerd is zie je in de admin onder Pages de zogenaamde page tree. Dit is als het ware de sitemap. Maar niet elke pagina in de tree hoeft voor te komen aan de voorzijde van de website. Een pagina kan ook alleen in de admin bestaan en daar gebruikt worden als data container voor andere pagina’s. Ook de admin pagina’s zijn in de tree zichtbaar. ![](https://www.corneelonline.nl/wp-content/uploads/2018/08/pw-pages.png) Alles in ProcessWire is een pagina. Dit is een heel krachtig principe. Je hebt geen verschillende content types nodig bijvoorbeeld, want alles is met pagina’s op te lossen. De betekenis of functie van de pagina hangt af van de positie in de tree en van de template die eraan gekoppeld is.

##### Templates

Elke pagina heeft een template. Deze template bepaalt welke velden er beschikbaar zijn in de pagina. Je kan dit principe gebruiken om pagina’s te maken met verschillende layouts, maar ook om verschillende content types te maken, zoals een blogpost, een evenement of een portfolio-item. ![](https://www.corneelonline.nl/wp-content/uploads/2018/08/pw-template.png)

##### Velden

Aan elke template kunnen velden worden gekoppeld. Dit zit in ProcessWire ingebakken en het is vergelijkbaar met ACF in WordPress. Als de standaard velden niet voldoende zijn kan dit uitgebreid worden met meer geavanceerde velden. ![](https://www.corneelonline.nl/wp-content/uploads/2018/09/pw-page.png)   Bij het bewerken van een pagina zie je de velden die in de gekozen template beschikbaar zijn. Het gebruik van velden kan ook heel geavanceerde vormen aannemen. Er is een veld beschikbaar waarmee je in een pagina blokken kan toevoegen die je helemaal zelf kan configureren en vormgeven. Dit veld heet [Repeater Matrix](https://processwire.com/api/modules/profields/repeater-matrix/) en is vergelijkbaar met [ACF flexibele content](https://www.advancedcustomfields.com/resources/flexible-content/). Met dit veld geef je de eigenaar van de website enorm veel vrijheid om zelf geavanceerde pagina's te creëren.

#### 2\. aanpasbare admin

De standaard admin voldoet prima voor kleinere websites. Er zijn verschillende [admin thema’s](https://modules.processwire.com/categories/admin-theme/) beschikbaar waarmee je de admin kan verfraaien. Maar als je website bouwt met veel verschillende content types of honderden pagina’s, dan zijn er [modules beschikbaar](https://processwire.com/api/modules/lister-pro/#a-powerful-new-way-to-browse-and-manage-your-pages) waarmee je de admin aan kan passen, zodat het terugvinden van content veel eenvoudiger gaat dan het doorploegen van de page tree.

#### 3\. ProcessWire heeft een fantastische API

ProcessWire heeft net als WordPress de programmeertaal PHP onder de motorkap. ProcessWire biedt een hele elegante [API](https://processwire.com/api/) aan met [uitgebreide documentatie](https://processwire.com/api/ref/), zodat het bouwen van templates snel en ongecompliceerd kan worden gedaan. ![](https://www.corneelonline.nl/wp-content/uploads/2018/08/pw-api-cheatsheet.png)

#### 4\. ProcessWire is gebouwd rondom een modulaire en makkelijk uitbreidbare architectuur

De core van ProcessWire is klein en bestaat uit een set modules die altijd mee worden geïnstalleerd. Deze modulaire opbouw heeft veel voordelen en bevordert de veiligheid van het CMS.

### Conclusie

ProcessWire is in mijn ogen een volwaardig alternatief voor WordPress. Het een CMS dat heel veel mogelijkheden biedt en dit artikel is maar een kleine introductie. Zoals bij elk CMS vereist het werken ermee een kleine leercurve en enige inspanning om ermee aan de slag te gaan. Als je je eenmaal thuis voelt in dit CMS dan zijn de mogelijkheden welhaast onbeperkt. De lijst met features is veel te lang, maar hier volgen een paar highlights:

*   ProcessWire is heel schaalbaar en kan duizenden pagina’s bevatten en toch goed blijven presteren dankzij goede [caching](http://processwire.com/api/modules/procache/).
*   ProcessWire heeft een kleine maar behulpzame community.
*   ProcessWire heeft goede [multi-language ondersteuning](https://processwire.com/api/multi-language-support/).
*   ProcessWire heeft goede standaard [user management](http://processwire.com/api/user-access/), met zeer gedetailleerde mogelijkheden om rollen en rechten te finetunen.
*   Er zijn veel [admin thema’s](http://modules.processwire.com/categories/admin-theme/) beschikbaar.
*   [Veiligheid](https://processwire.com/docs/security/) is een topprioriteit.
*   ProcessWire wordt heel [actief ontwikkeld](https://github.com/ryancramerdesign/ProcessWire/commits/dev).

Onderaan dit artikel vind je een paar links naar meer interessant leesvoer over ProcessWire.

### En WordPress dan?

WordPress staat natuurlijk ook niet stil. Op het moment van schrijven van dit artikel staat versie 5.0 op het punt van uitkomen, waarbij een nieuwe standaard content editor wordt geleverd met de naam [Gutenberg](https://wordpress.org/gutenberg/). Deze editor geeft een hele nieuwe ervaring volgens WordPress (daarover meer in een [volgend artikel](https://www.corneelonline.nl/blog/wordpress-gutenberg-editor/)), maar deze nieuwe editor lost nog niet de behoefte aan velden op. WordPress biedt ook betere en uitgebreidere mogelijkheden voor het bouwen van e-commerce website of andere website waarbij online betalen een rol speelt. WordPress is het meest gebruikte CMS ter wereld en dat is niet voor niets. Maar het betekent ook dat WordPress een geliefd doel is van kwaadwillenden. Ik zal WordPress niet direct verlaten, maar het is wel fijn om een goed alternatief achter de hand te hebben met ProcessWire.

### Meer informatie

Hier nog een paar interessante artikelen waarin verder wordt ingegaan op ProcessWire: **ProcessWire CMS – A Beginner’s Guide door Smashing Magazine** Een zeer uitgebreide introductie door het toonaangevende blog _Smashing Magazine_. [https://www.smashingmagazine.com/2016/07/the-aesthetic-of-non-opinionated-content-management-a-beginners-guide-to-processwire/](https://www.smashingmagazine.com/2016/07/the-aesthetic-of-non-opinionated-content-management-a-beginners-guide-to-processwire/) **ProcessWire CMS for the beginner – pros and cons** De voors en tegens op een rij gezet. [https://purely.space/processwire-cms-pros-cons/](https://purely.space/processwire-cms-pros-cons/) **ProcessWire Review – Simplicity Meets Performance** Een review van ProcessWire waarin het bouwen van een blog centraal staat door _CMS Critic_. [https://www.cmscritic.com/processwire-review/](https://www.cmscritic.com/processwire-review/) **CMS Critic Powered by ProcessWire (again) + Case Study** De website _CMS Critic_ is ooit helemaal omgebouwd met ProcessWire als CMS. Dit proces is uitvoerig beschreven en biedt daarom een goed inzicht in de sterke punten van ProcessWire en in de overeenkomsten en verschillen met WordPress. [http://processwire.com/blog/posts/cms-critic-powered-by-processwire-again-case-study/](http://processwire.com/blog/posts/cms-critic-powered-by-processwire-again-case-study/) **4 Reasons to Choose ProcessWire as Your Next CMS** Een interessant artikel dat tevens als bron heeft gediend voor dit artikel. [https://code.tutsplus.com/articles/4-reasons-to-choose-processwire-as-your-next-cms--cms-25062](https://code.tutsplus.com/articles/4-reasons-to-choose-processwire-as-your-next-cms--cms-25062)

### ProcessWire en Corneel

In mijn portfolio staat tot nu toe welgeteld één project dat met ProcessWire gebouwd is: de website van fotograaf [Niels Watermulder](https://www.corneelonline.nl/portfolio/niels-watermulder/). Dit zal zeker niet het laatste project zijn. Heb jij een leuk project dat je graag met dit CMS uitgevoerd zou willen zien? Neem dan meteen [contact](https://www.corneelonline.nl/contact/) met me op!