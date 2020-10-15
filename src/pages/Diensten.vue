<template>
  <Layout>
    <PageIntro 
      v-bind:title="$page.post.title"
      v-bind:headline="$page.post.headline"
      v-bind:intro="$page.post.introduction_text"
    />
    <section class="services-overview">
      <ServiceExcerpt v-for="edge in $page.services.edges" :key="edge.node.id">
        <h3>{{edge.node.title}}</h3>
        <div v-html="edge.node.content" />
      </ServiceExcerpt>
    </section>
    <section class="big-image services">
      <g-image :src="$page.post.big_image_url" alt="control room" />
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

<page-query>
query {
  post: webpage(id: "f30f003e2ef8095e79939ac605ccf56f") {
    title
    fileInfo {
      name
    }
    headline
    introduction_text
    big_image_url
    seo_title
    seo_description
  }
  services: allService(sortBy: "sort_order", order: ASC, filter: { show_on_homepage: { eq: true }}) {
    edges {
      node {
        title
        content
      }
    }
  }
}
</page-query>

<script>
import PageIntro from '~/components/layout/PageIntro.vue'
import ContactMe from '~/components/layout/ContactMe.vue'
import BigImage from '~/components/layout/BigImage.vue'
import ServiceExcerpt from '~/components/service/Excerpt.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.post.seo_title,
      meta: [
        {
          name: "description",
          content: this.$page.post.seo_description
        },
        {
          property: "og:title",
          content: this.$page.post.seo_title
        },
        {
          property: "og:description",
          content: this.$page.post.seo_description
        },
        {
          property: "og:image",
          content: ""
        }
      ],
      bodyAttrs: {
        class: this.$page.post.fileInfo.name
      }
    }
  },
  components: {
    PageIntro,
    ContactMe,
    BigImage,
    ServiceExcerpt
  }
}
</script>

<style lang="scss">
// --------------------------------------
// services overview
// --------------------------------------
.services-overview {
  @include container-narrow-half;
  padding-top: 3rem;
  padding-bottom: 0;
  background-color: var(--color-gray-light);
}
.big-image {
  width: 100%;
  padding: 0;
  position: relative;

  &.services::before {
    @include top-triangle(var(--color-gray-light));
  }
}
</style>