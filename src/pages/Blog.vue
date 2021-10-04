<template>
  <Layout>
    <SocialHead
      title="Blog"
      description="Corneel heeft wat te vertellen. In het blog vind je artikelen over webdevelopment, webdesign, tips en tricks, trends en ontwikkelingen en nog veel meer."
      :path="canonicalUrl"
      body-class="blog"
    />
    <section class="page-intro">
      <h1>Blog</h1>
    </section>
    <section class="blog-posts">
      <div class="latest-post">
        <article
          class="blog-post__teaser latest"
          v-for="edge in $page.firstPost.edges"
          :key="edge.node.id"
        >
          <g-link class="post-details" :to="edge.node.path">
            <figure class="cover-image">
              <BlogMainImage :imgSrc="edge.node.mainImage.asset.url" />
            </figure>
            <ul class="tags" v-if="edge.node.tags">
              <li v-for="tag in edge.node.tags" :key="tag.id">{{ tag }}</li>
            </ul>
            <h2>{{ edge.node.title }}</h2>
          </g-link>
        </article>
      </div>
      <!--div class="grid" ref="grid"-->
      <masonry
        :cols="{ default: 3, 976: 2, 560: 1 }"
        :gutter="{ default: '30px' }"
      >
        <article
          class="blog-post__teaser"
          v-for="edge in $page.otherPosts.edges"
          :key="edge.node.id"
        >
          <g-link class="post-details" :to="edge.node.path">
            <figure class="cover-image">
              <BlogTeaserImage :imgSrc="edge.node.mainImage.asset.url" />
            </figure>
            <ul class="tags" v-if="edge.node.tags">
              <li v-for="tag in edge.node.tags" :key="tag.id">{{ tag }}</li>
            </ul>
            <h2>{{ edge.node.title }}</h2>
          </g-link>
        </article>
      </masonry>
      <!--div-->
    </section>
    <ContactMe />
  </Layout>
</template>

<page-query>
query {
  firstPost: allSanityPost(sortBy: "publishedAt", order: DESC, limit: 1) {
    edges {
      node {
        id
        title
        slug {
          current
        }
        path
        mainImage {
          asset {
            url
          }
        }
        tags
      }
    }
  }
  otherPosts: allSanityPost(sortBy: "publishedAt", order: DESC, skip: 1) {
    edges {
      node {
        id
        title
        slug {
          current
        }
        path
        mainImage {
          asset {
            url
          }
        }
        tags
      }
    }
  }
}
</page-query>

<script>
import SocialHead from "~/components/common/SocialHead.vue";
import ContactMe from "~/components/layout/ContactMe.vue";
import BlogMainImage from "~/components/common/BlogMainImage.vue";
import BlogTeaserImage from "~/components/common/BlogTeaserImage.vue";
import Vue from "vue";
import VueMasonry from "vue-masonry-css";
Vue.use(VueMasonry);

export default {
  components: {
    SocialHead,
    ContactMe,
    BlogMainImage,
    BlogTeaserImage,
    VueMasonry,
  },
  computed: {
    canonicalUrl() {
      return process.env.GRIDSOME_BASE_URL + "/blog/";
    },
  },
};
</script>

<style scoped lang="scss">
.blog-posts {
  @include container;
  background-color: var(--color-gray-light);
  border-bottom: 3rem solid var(--color-white);
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: $lg) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
.grid {
  @media (min-width: $sm) {
    column-count: 2;
  }
  @media (min-width: $md) {
    column-count: 2;
  }
  @media (min-width: $lg) {
    column-count: 3;
  }
  @media (min-width: $xl) {
    column-count: 3;
  }
}
.blog-post__teaser {
  background-color: var(--color-white);
  padding-bottom: 1rem;
  margin-top: 2rem;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;

  // fix safari bug with column layout
  &:first-of-type {
    margin-top: 0;
  }

  .post-details {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  h2 {
    @extend .h5;
    color: var(--color-orange);
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .cover-image {
    margin-bottom: 1rem;
  }

  .tags {
    margin: 0 1rem 1rem;
  }
}
.blog-post__teaser.latest {
  background-color: var(--color-gray-light);
  width: 100%;

  @media (min-width: $lg) {
    padding-bottom: 2rem;
  }

  .cover-image {
    order: 1;
  }

  .tags {
    order: 2;
    margin: 0;
  }

  h2 {
    order: 0;
    @extend .h3;
    color: var(--color-orange);
    margin-left: 0;

    @media (min-width: $lg) {
      margin-bottom: 1rem;
    }
  }
}
</style>
