---
draft: true
tags:
- JAMstack
- SSR
title: Static Site Generators
main_image: https://res.cloudinary.com/corneel-online/image/upload/v1603361541/corneelonline/static-site-generators_f88byr.jpg
date_published: 2020-10-12T00:00:00.000+02:00
seo_title: Static Site Generators
seo_description: Een Static Site Generator is een belangrijk onderdeel in web development
  volgens de JAMstack-methode.
published: true
related_articles:
- content/posts/gridsome-moderne-site-generator-voor-vue-js.md
- content/posts/hugo-de-snelste-open-source-static-site-generator.md
- content/posts/jamstack-de-methode-voor-snelle-en-veilige-websites.md

---
### Wat is een Static Site Generator?
Een Static Site Generator is een belangrijk onderdeel in web development volgens de JAMstack-methode. Zoals omschreven in dit artikel bestaat de J-A-M uit JAMstack uit deze onderdelen:

* Javascript
* API's
* Markup

De markup (de broncode van de eigenlijke website) wordt gecreëerd met behulp van een Static Site Generator (SSG). Ze verwerken de inhoud in templates en genereren een weergave van de webpagina's.

Bij de traditionele werkwijze wordt een pagina gegenereerd op het moment dat deze door de bezoeker wordt opgevraagd. Het grootste verschil tussen een Static Site Generator en een traditionele werkwijze, is dat een Static Site Generator dit van tevoren doet zodat de pagina al klaar staat als deze wordt opgevraagd.

Beschouw een Static Site Generator als een script dat gegevens, inhoud en sjablonen samenvoegt, verwerkt en een map vol met alle resulterende pagina's uitvoert.

Dit heeft een aantal waardevolle effecten, maar het belangrijkste is dat het dit werk verschuift van "aanvraagtijd" (wanneer gebruikers om de weergave vragen) naar "bouwtijd" die niets te maken heeft met wanneer gebruikers om de weergave van een pagina vragen. Deze "ontkoppelde" architectuur verbreekt de relatie tussen het aantal bezoeken aan een site en de overhead van het genereren van weergaven voor al die bezoeken.

### Waarom zijn generatoren van statische sites nu zo populair?
Dit klinkt misschien als een terugkeer naar 'de oude manieren' om sites te maken, maar er zijn enkele belangrijke verschillen:

#### Static Site Generatoren zijn goed geworden!
De tools zijn in de loop der jaren enorm verbeterd. En deze tools zijn nu overal beschikbaar voor ontwikkelaars, wat betekent dat ze binnen enkele minuten aan de slag kunnen, productief kunnen zijn en beginnen met het maken van sites.

#### Static Site Generatoren zijn er in alle smaken
Toen de aanpak aan populariteit begon te winnen, creëerden steeds meer ontwikkelaars tools om te werken in de taal en omgeving die het beste bij hun ontwikkelingssmaak pasten. Je kunt nu sitegeneratoren vinden die zijn gebaseerd op een groot aantal programmeertalen, verschillende templating-talen en conventies gebruiken en in allerlei omgevingen draaien. Die bekendheid zorgt voor productiviteit.

#### Automatisering werd mainstream
De taak van het bijwerken van een site die op deze manier is gebouwd, omvat het uitvoeren van de sitegenerator om een ​​bijgewerkte versie van de pagina's te produceren. Jaren geleden was dit omslachtig, maar nu zijn er veel tools die die taak voor ons kunnen automatiseren. Het resultaat is een ontwikkelworkflow die zeer effectief en voorspelbaar is, maar ook zeer robuuste, vooraf gegenereerde views oplevert.

### Welke smaken zijn er zoal?
De lijst barst inmiddels uit zijn voegen, maar ik zal proberen hier een overzicht te geven van de populairste Static Site Generatoren:

#### Jekyll - https://jekyllrb.com/
Jekyll bestaat sinds 2008 en is daarmee van de eerste en meest gebruikte static site generators. Jekyll is gebouwd met Ruby.

#### Hugo - https://gohugo.io/
Hugo is de 'andere' grote static site generator, gebouwd met de programmeertaal Go. De kracht van Hugo is dat het de sneltste van het hele stel is. Hugo kan grote hoeveelheden pagina's in enkele seconden genereren.

#### Next.js - https://nextjs.org/
Next.js is een framework gebouwd met React en is meer dan alleen een static site generator. Next.js biedt meerdere opties om apps en websites te bouwen en SSR is daar een van.

#### Gatsby - https://nextjs.org/
Gatsby is een static site generator gebouwd met React. Het kan data uit een of meerder bronnen binnenhalen en samenvoegen in een eigen dataverzameling, die te benaderen is met een hele geavanceerde GraphQL oplossing.

#### Nuxt.js - https://nuxtjs.org/
Nuxt.js is de Vue.js tegenhanger van Next.js. Beide frameworks kunnen min of meer hetzelfde, maar Nuxt.js is gebouwd met Vue.

#### Gridsome - https://gridsome.org/
Gridsome is de Vue.js tegenhanger van Gatsby en een van de favoriete tools van Corneel Online. Deze website is met Gridsome gebouwd.

#### Eleventy (11ty) - https://www.11ty.dev/
Eleventy is de tegenhanger van Jekyll, maar dan gebaseerd op Vanilla Javascript en niet op een framework. De kracht is de eenvoud van het systeem.

#### Scully - https://github.com/scullyio/scully
Scully is het antwoord van Angular op het gebied van Static Site Generators. Scully is nog relatief nieuw in vergelijking met de andere opties.

De lijst is nog veel groter, zie https://www.staticgen.com/ voor alle smaken.

### Welke Static Site Generatoren gebruikt Corneel Online?
Omdat ik gekozen heb voor Vue.js als mijn favoriete Javascriptframework gaat mijn voorkeur uit naar Static Site Generatoren die op Vue.js gebaseerd zijn: Gridsome en Nuxt.js.

Voor de bouw van deze website is Gridsome gebruikt. In [dit artikel] wordt dieper ingegaan op de sterke punten van Gridsome.

Maar ik heb ook met Hugo gewerkt. Het voordeel van Hugo is dat het generatieproces zelf al razendsnel is. Met name voor websites die uit heel veel pagina's bestaan is dat een voordeel. In [dit artikel] vind je meer informatie over Hugo.