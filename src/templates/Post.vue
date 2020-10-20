<template>
  <Layout>
    <section class="page-intro">
      <h1>Projecten</h1>
    </section>
    <section class="post-single">
      <g-link to="/blog/" class="button-back">Terug</g-link>
      <h2 v-html="$page.post.title"/>
      <figure class="main-image">
        [IMAGE]
      </figure>
      <ul class="tags">
        <li>Development</li>
        <li>CMS</li>
        <li>WordPress</li>
      </ul>
      <div class="post-body" v-html="$page.post.content"/>
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
  post(path: $path) {
    id
    title
    excerpt
    content
  }
}
</page-query>

<script>
import ContactMe from '~/components/layout/ContactMe.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.excerpt
        },
        {
          property: "og:title",
          content: this.$page.post.title
        },
        {
          property: "og:description",
          content: this.$page.post.excerpt
        },
        {
          property: "og:image",
          content: ""
        }
      ],
      bodyAttrs: {
        class: 'blog'
      }
    }
  },
  components: {
    ContactMe
  }
}
</script>

<style scoped lang="scss">

</style>