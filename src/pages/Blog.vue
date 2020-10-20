<template>
  <Layout>
    <section class="page-intro">
      <h1>Blog</h1>
    </section>
    <section class="blog-posts">
      <BlogTeaser v-for="edge in $page.posts.edges" :key="edge.node.id" v-bind:post="edge.node"/>
    </section>
    <ContactMe />
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
		edges {
			node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import BlogTeaser from '~/components/blog/Teaser.vue'
import ContactMe from '~/components/layout/ContactMe.vue'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    BlogTeaser,
    ContactMe
  }
}
</script>

<style scoped lang="scss">
.page-intro {
  @include container-narrow-half;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.blog-posts {
  @include container;
  background-color: var(--color-gray-light);
  border-bottom: 3rem solid var(--color-white);
  padding-top: 2rem;
  padding-bottom: 2rem;
  
  @media (min-width: $lg) {
    @include container-narrow;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>