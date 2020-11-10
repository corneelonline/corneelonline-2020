<template>
  <Layout>
    <section class="page-intro">
      <h1>Bedankt</h1>
    </section>
    <div class="page-content--default">
      <p>Bedankt voor je bericht.</p>
      <p>Je bericht is verzonden. Ik neem zo snel mogelijk contact met je op.</p>
    </div>
    <ContactMe />
  </Layout>
</template>

<page-query>
query {
  content: sanityDefaultPage(id: "c430ba20-a1a2-4982-a77b-8e1716489164") {
    title
    _rawBody
    seo {
      seo_title
      meta_description
    }
  }
}
</page-query>

<script>
import ContactMe from '~/components/layout/ContactMe.vue'

export default {
  metaInfo() {
    return {
      title: "Bedankt",
      meta: [
        {
          name: "description",
          content: "Bedankt voor je bericht."
        },
        {
          property: "og:title",
          content: "Bedankt"
        },
        {
          property: "og:description",
          content: "Bedankt voor je bericht."
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
    ContactMe
  }
}
</script>
