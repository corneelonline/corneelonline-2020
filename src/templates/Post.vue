<template>
  <Layout>
    <section class="page-intro">
      <h1>Blog</h1>
    </section>
    <section class="post-single">
      <g-link to="/blog/" class="button-back">Terug</g-link>
      <h2 v-html="$page.post.title"/>
      <figure class="cover-image">
        <g-image :src="$page.post.main_image" alt="blog cover image" />
      </figure>
      <div class="post-single__meta">
        <ul class="tags" v-if="$page.post.tags">
          <li v-for="tag in $page.post.tags" :key="tag.id">{{ tag }}</li>
        </ul>
        <div class="time-to-read">Leestijd: {{ $page.post.timeToRead }} min.</div>
      </div>
      <div class="post-single__content" v-html="$page.post.content"/>
    </section>
    <ContactMe />
  </Layout>
</template>

<page-query>
query ($path: String!) {
  post(path: $path) {
    id
    path
    title
    main_image
    tags
    content
    timeToRead
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
          content: this.$page.post.main_image
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
.post-single {
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

  h2 {
    @extend .h3;
    color: var(--color-orange);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .cover-image {
    margin-bottom: 1rem;
  }

  &__meta {
    margin-bottom: 1rem;

    @media (min-width: $sm) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    @media (min-width: $md) {
      margin-bottom: 2rem;
    }
  }

  .tags {
    margin-bottom: 1rem;

    @media (min-width: $sm) {
      margin-bottom: 0;
    }
  }

  .time-to-read {
    @include font-size(0.889);
  }

  .post-single__content {
    @media (min-width: $lg) {
      padding-left: 5rem;
      padding-right: 5rem;
    }
    @media (min-width: $xl) {
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }
}
</style>