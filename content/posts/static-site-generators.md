---
draft: true
tags:
- JAMstack
- SSR
title: Static Site Generators
banner_image: ''
date_published: 
seo_title: Static Site Generators
seo_description: ''

---
## Wat is een Static Site Generator?
Een Static Site Generator is een belangrijk onderdeel in web development volgens de JAMstack-methode. Zoals omschreven in dit artikel bestaat de J-A-M uit JAMstack uit deze onderdelen:

* Javascript
* API's
* Markup

De markup (de broncode van de eigenlijke website) wordt gecreëerd met behulp van een Static Site Generator (SSG). Ze verwerken de inhoud in templates en genereren een weergave van de webpagina's.

Bij de traditionele werkwijze wordt een pagina gegenereerd op het moment dat deze door de bezoeker wordt opgevraagd. Het grootste verschil tussen een Static Site Generator en een traditionele werkwijze, is dat een Static Site Generator dit van tevoren doet zodat de pagina al klaar staat als deze wordt opgevraagd.

Beschouw een Static Site Generator als een script dat gegevens, inhoud en sjablonen samenvoegt, verwerkt en een map vol met alle resulterende pagina's uitvoert.

Dit heeft een aantal waardevolle effecten, maar het belangrijkste is dat het dit werk verschuift van "aanvraagtijd" (wanneer gebruikers om de weergave vragen) naar "bouwtijd" die niets te maken heeft met wanneer gebruikers om de weergave van een pagina vragen. Deze "ontkoppelde" architectuur verbreekt de relatie tussen het aantal bezoeken aan een site en de overhead van het genereren van weergaven voor al die bezoeken.

## Waarom zijn generatoren van statische sites nu zo populair?
Dit klinkt misschien als een terugkeer naar 'de oude manieren' om sites te maken, maar er zijn enkele belangrijke verschillen:

### Static Site Generatoren zijn goed geworden!
De tools zijn in de loop der jaren enorm verbeterd. En deze tools zijn nu overal beschikbaar voor ontwikkelaars, wat betekent dat ze binnen enkele minuten aan de slag kunnen, productief kunnen zijn en beginnen met het maken van sites.

### Static Site Generatoren zijn er in alle smaken
Toen de aanpak aan populariteit begon te winnen, creëerden steeds meer ontwikkelaars tools om te werken in de taal en omgeving die het beste bij hun ontwikkelingssmaak pasten. Je kunt nu sitegeneratoren vinden die zijn gebaseerd op een groot aantal programmeertalen, verschillende templating-talen en conventies gebruiken en in allerlei omgevingen draaien. Die bekendheid zorgt voor productiviteit.

### Automatisering werd mainstream
De taak van het bijwerken van een site die op deze manier is gebouwd, omvat het uitvoeren van de sitegenerator om een ​​bijgewerkte versie van de pagina's te produceren. Jaren geleden was dit omslachtig, maar nu zijn er veel tools die die taak voor ons kunnen automatiseren. Het resultaat is een ontwikkelworkflow die zeer effectief en voorspelbaar is, maar ook zeer robuuste, vooraf gegenereerde views oplevert.

## Welke smaken zijn er zoal?
De lijst barst inmiddels uit zijn voegen, maar ik zal proberen hier een overzicht te geven van de populairste Static Site Generatoren:

### Jekyll
Hier een omschrijving...

### Hugo
Hier een omschrijving...

### Next.js
Hier een omschrijving...

### Gatsby
Hier een omschrijving...

### Nuxt.js
Hier een omschrijving...

### Gridsome
Hier een omschrijving...

### 11ty
Hier een omschrijving...

### Scully
Hier een omschrijving...

De lijst is nog veel groter, zie https://www.staticgen.com/

## Welke Static Site Generatoren gebruikt Corneel Online?
Omdat ik gekozen heb voor Vue.js als mijn favoriete Javascriptframework gaat mijn voorkeur uit naar Static Site Generatoren die op Vue.js gebaseerd zijn: Gridsome en Nuxt.js.

Voor de bouw van deze website is Gridsome gebruikt. In [dit artikel] wordt dieper ingegaan op de sterke punten van Gridsome.

Maar ik heb ook met Hugo gewerkt. Het voordeel van Hugo is dat het generatieproces zelf al razendsnel is. Met name voor websites die uit heel veel pagina's bestaan is dat een voordeel. In [dit artikel] vind je meer informatie over Hugo.