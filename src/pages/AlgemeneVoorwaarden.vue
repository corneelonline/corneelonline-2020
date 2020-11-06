<template>
  <Layout>
    <section class="page-intro">
      <h1>{{ $page.content.title }}</h1>
    </section>
    <div class="page-content--default">
      <PortableText :blocks="$page.content._rawBody" />
      <h3>1. Toepasselijkheid</h3>
      <dl class="terms-list">
        <div v-for="edge in $page.terms_1.edges" :key="edge.node.id">
          <dt>{{ edge.node.termNumber }}</dt>
          <dd><PortableText :blocks="edge.node._rawBody" /></dd>
        </div>
      </dl>
      <h3>2. Totstandkoming van de overeenkomst</h3>
      <dl class="terms-list">
        <div v-for="edge in $page.terms_2.edges" :key="edge.node.id">
          <dt>{{ edge.node.termNumber }}</dt>
          <dd><PortableText :blocks="edge.node._rawBody" /></dd>
        </div>
      </dl>
    </div>
    <ContactMe />
  </Layout>
</template>

<page-query>
query {
  content: sanityDefaultPage(id: "752ec304-7eba-4189-a0c2-737437c4da3a") {
    title
    _rawBody
    seo {
      seo_title
      meta_description
    }
  }
  terms_1: allSanityTerm(sortBy: "termNumber", order: ASC, filter: { paragraph: { eq: 1 }}) {
    edges {
      node {
        id
        paragraph
        termNumber
        _rawBody
      }
    }
  }
  terms_2: allSanityTerm(sortBy: "termNumber", order: ASC, filter: { paragraph: { eq: 2 }}) {
    edges {
      node {
        id
        paragraph
        termNumber
        _rawBody
      }
    }
  }
}
</page-query>

<script>
import PortableText from '~/components/sanity/PortableText.vue'
import ContactMe from '~/components/layout/ContactMe.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.content.seo_title,
      meta: [
        {
          name: "description",
          content: this.$page.content.seo_description
        },
        {
          property: "og:title",
          content: this.$page.content.seo_title
        },
        {
          property: "og:description",
          content: this.$page.content.seo_description
        },
        {
          property: "og:image",
          content: ""
        }
      ],
      bodyAttrs: {
        class: "default-page"
      }
    }
  },
  components: {
    PortableText,
    ContactMe
  }
}
</script>

<style lang="scss" scoped>
.terms-list > div {
  display: flex;

  dt {
    width: 15%;
    
    @media (min-width: $sm) {
      width: 10%;
    }
  }

  dd {
    width: 85%;
    
    @media (min-width: $sm) {
      width: 90%;
    }
  }
}
</style>