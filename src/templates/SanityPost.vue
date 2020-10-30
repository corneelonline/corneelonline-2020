<template>
  <Layout>
    <section class="page-intro">
      <h1>Blog</h1>
    </section>
    <section class="post-single">
      <g-link to="/blog/" class="button-back">Terug</g-link>
      <h2 v-html="$page.sanityPost.title"/>
      <figure class="cover-image">
        <g-image :src="$page.sanityPost.mainImage.asset.url" alt="blog cover image" />
      </figure>
      <div class="post-single__meta">
        <ul class="tags" v-if="$page.sanityPost.tags">
          <li v-for="tag in $page.sanityPost.tags" :key="tag.id">{{ tag }}</li>
        </ul>
      </div>
      <div class="post-single__content">
        <SanityRichText :blocks="$page.sanityPost._rawBody" />
      </div>
    </section>
    <RelatedArticles v-bind:relPosts="$page.sanityPost.relatedPosts"/>
    <ContactMe />
  </Layout>
</template>

<page-query>
query ($path: String!) {
  sanityPost(path: $path) {
    id
    path
    title
    slug {
      current
    }
    mainImage {
      asset {
        url
      }
    }
    tags
    _rawBody(resolveReferences: {maxDepth: 10})
    relatedPosts {
      id
      path
      title
      mainImage {
        asset {
          url
        }
      }
      tags
    }
  }
}
</page-query>

<script>
import SanityRichText from '~/components/ui/SanityRichText.vue'
import RelatedArticles from '~/components/blog/RelatedArticles.vue'
import ContactMe from '~/components/layout/ContactMe.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.sanityPost.title,
      meta: [
        {
          name: "description",
          content: this.$page.sanityPost.excerpt
        },
        {
          property: "og:title",
          content: this.$page.sanityPost.title
        },
        {
          property: "og:description",
          content: this.$page.sanityPost.excerpt
        },
        {
          property: "og:image",
          content: this.$page.sanityPost.main_image
        }
      ],
      bodyAttrs: {
        class: 'blog'
      }
    }
  },
  components: {
    SanityRichText,
    RelatedArticles,
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

  figure {
    margin-bottom: 4rem;
  }
}
</style>