<template>
  <Layout>
    <section class="page-intro">
      <h1>Projecten</h1>
    </section>
    <section class="project-single">
      <g-link to="/projecten/" class="button-back">Terug</g-link>
      <h2 v-html="$page.project.title"/>
      <figure class="main-image">
        <g-image src="~/assets/images/dummy-project-1.png" alt="project img" />
      </figure>
      <div class="project-desc">
        <div class="project-desc__details">
          <dl>
            <dt>Opdrachtgever</dt>
            <dd>{{$page.project.client}}</dd>
            <dt>Team</dt>
            <dd>{{$page.project.team}}</dd>
            <dt>Diensten</dt>
            <dd>{{$page.project.services}}</dd>
            <dt>Opgeleverd</dt>
            <dd>{{$page.project.delivery_date}}</dd>
          </dl>
          <a v-if="$page.project.visit_website.length" :href="$page.project.visit_website" class="button" target="_blank">Bezoek website</a>
        </div>
        <div class="project-desc__content" v-html="$page.project.content"/>
      </div>
      <div class="project-case">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque dicta amet tempora, eaque minima illo itaque maxime pariatur ea aliquid nemo quas at placeat, praesentium reprehenderit sed. Sed, iste totam.
      </div>
      <div class="page-nav">
        <g-link to="/previous/" class="page-nav__prev">Vorig project</g-link>
        <g-link to="/next/" class="page-nav__next">Volgend project</g-link>
      </div>
    </section>
    <ContactMe />
  </Layout>
</template>

<page-query>
query ($path: String!) {
  project(path: $path) {
    id
    title
    banner_image_url
    client
    team
    services
    delivery_date(format: "YYYY")
    visit_website
    seo_title
    seo_description
  }
}
</page-query>

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

<style lang="scss">

</style>