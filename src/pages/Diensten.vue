<template>
  <Layout>
    <PageIntro v-bind:title="Diensten">
      <div class="page-intro__body">
        <h2 class="headline">Wat ik doe</h2>
        <p>Corneel Online brengt jouw idee&euml;n tot leven. Met een team van webprofessionals ontwikkel ik doordachte (mobiele) websites en webapplicaties die laten zien wie jij bent en waar jij voor staat.</p>
      </div>
    </PageIntro>
    <section class="services-overview">
      <div class="service">
        <h3>Web Development</h3>
        <p>Corneel Online ontwikkelt moderne en robuuste maatwerk websites en webapplicaties waar jij het verschil mee maakt.</p>
      </div>
      <div class="service">
        <h3>Webdesign</h3>
        <p>Met mijn netwerk van webdesigners zorgen we voor een uniek ontwerp dat precies past bij jouw project, jouw organisatie en jouw persoonlijkheid.</p>
      </div>
      <div class="service">
        <h3>Content Management</h3>
        <p>Met een robuust content management systeem blijf je de baas over je eigen content. Corneel Online helpt je de juiste keuze te maken.</p>
      </div>
      <div class="service">
        <h3>Vindbaarheid / SEO</h3>
        <p>Websites van Corneel Online zijn goed vindbaar. En met een netwerk van marketeers zetten we als het nodig is net een stap verder.</p>
      </div>
      <div class="service">
        <h3>Mobile first</h3>
        <p>Meer dan de helft van alle bezoekers van een website doen dat met hun telefoon. Het is daarom essentieel dat jouw website of applicatie perfect werkt op mobiele devices.</p>
      </div>
      <div class="service">
        <h3>Advies en ondersteuning</h3>
        <p>Heb je plannen en wil je weten wat er mogelijk is? Of welke aanpak voor jouw project het meest geschikt is? Corneel Online denkt gaag met je mee.</p>
      </div>
    </section>
    <section class="big-image">
      [IMAGE]
    </section>
    <section class="process">
      <h2>Hoe ik het doe</h2>
      <div class="process__step">
        <h3>Doelen van het project bepalen</h3>
        <p>Wat heb je nodig? Welke factoren zijn bepalend het succes van het project? Is er al een ontwerp? Of een marketing strategie? We zorgen eerst dat het doel van het project glashelder is en dat we precies weten wat er nodig is om er een succes van te maken.</p>
      </div>
      <div class="process__step">
        <h3>De juiste tools uitzoeken</h3>
        <p>De volgende stap is om de juiste tools uit te zoeken voor de uitvoering van het project. Het doel van het project bepaalt de keuze voor de technologie die toegepast wordt. We nemen de mogelijkheden door en wegen de voor- en nadelen af om tot het beste eindresultaat te komen.</p>
      </div>
      <div class="process__step">
        <h3>Aan de slag</h3>
        <p>Nadat het doel van het project helder is en de juiste tools zijn geselecteerd gaan we aan de slag. Tijdens de uitvoering van het project blijf je als opdrachtgever nauw betrokken en wordt je op de hoogte gehouden van de voortgang.</p>
      </div>
      <div class="process__step">
        <h3>Testen en opleveren</h3>
        <p>Als het project technisch klaar is wordt dit op een demo server beschikbaar gesteld, zodat er getest kan worden. En als alles 100% in orde is wordt het project gelanceerd.</p>
      </div>
      <div class="process__step">
        <h3>Geen reden om afscheid te nemen</h3>
        <p>De oplevering markeert het einde van het project, maar ook het begin van een mooie samenwerking. Na lancering komt de website of app pas echt tot leven. Denk hierbij aan onderhoud, nazorg, doorontwikkelen en verdere optimalisatie.</p>
      </div>
    </section>
    <ContactMe />
  </Layout>
</template>

<script>
import PageIntro from '~/components/layout/PageIntro.vue'
import ContactMe from '~/components/layout/ContactMe.vue'

export default {
  metaInfo: {
    title: 'Diensten'
  },
  components: {
    PageIntro,
    ContactMe
  }
}
</script>

<style lang="scss">
// --------------------------------------
// services overview
// --------------------------------------
.services-overview {
  @include container-narrow-half;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: var(--color-gray-light);
}
</style>