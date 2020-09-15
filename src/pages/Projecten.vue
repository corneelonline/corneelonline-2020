<template>
  <Layout>
    <section class="page-intro">
      <h1>Projecten</h1>
      <h2 class="headline">Wat ik doe</h2>
      <p>Corneel Online brengt jouw idee&euml;n tot leven. Met een team van webprofessionals ontwikkel ik doordachte (mobiele) websites en webapplicaties die laten zien wie jij bent en waar jij voor staat.</p>
    </section>
    <section class="featured-projects">
      <h2>Uitgelichte projecten</h2>
      <div class="featured-project">
        <div class="featured-project__image">
          [IMAGE]
        </div>
        <div class="featured-project__body">
          <h3>GSA Onderwijsstandaard</h3>
          <p>Met mijn netwerk van webdesigners zorgen we voor een uniek ontwerp dat precies past bij jouw project, jouw organisatie en jouw persoonlijkheid.</p>
          <g-link to="/" class="button">Meer over deze case</g-link>
        </div>
        <div class="featured-project__body">
          <h3>GSA Onderwijsstandaard</h3>
          <p>Met mijn netwerk van webdesigners zorgen we voor een uniek ontwerp dat precies past bij jouw project, jouw organisatie en jouw persoonlijkheid.</p>
          <g-link to="/" class="button">Meer over deze case</g-link>
        </div>
        <div class="featured-project__body">
          <h3>GSA Onderwijsstandaard</h3>
          <p>Met mijn netwerk van webdesigners zorgen we voor een uniek ontwerp dat precies past bij jouw project, jouw organisatie en jouw persoonlijkheid.</p>
          <g-link to="/" class="button">Meer over deze case</g-link>
        </div>
      </div>
    </section>
    <section class="all-projects">
      <div class="project-teaser">
        [PROJECT-TEASER]
      </div>
      <div class="project-teaser">
        [PROJECT-TEASER]
      </div>
      <div class="project-teaser">
        [PROJECT-TEASER]
      </div>
    </section>
    <ContactMe />
  </Layout>
</template>

<script>
import ContactMe from '~/components/layout/ContactMe.vue'

export default {
  metaInfo: {
    title: 'Projecten'
  },
  components: {
    ContactMe
  }
}
</script>
