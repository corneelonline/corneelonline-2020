<template>
  <Layout>
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
      <div class="grid" ref="grid" v-images-loaded:on.progress="layout">
        <div class="grid-sizer"></div>
        <div class="gutter-sizer"></div>
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
      </div>
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
import Masonry from "masonry-layout";
import imagesLoaded from "vue-images-loaded";
import ContactMe from "~/components/layout/ContactMe.vue";
import BlogMainImage from "~/components/common/BlogMainImage.vue";
import BlogTeaserImage from "~/components/common/BlogTeaserImage.vue";

export default {
  metaInfo() {
    return {
      title: "Blog",
      meta: [
        {
          name: "description",
          content:
            "Corneel heeft wat te vertellen. In het blog vind je artikelen over webdevelopment, webdesign, tips en tricks, trends en ontwikkelingen en nog veel meer.",
        },
        {
          property: "og:title",
          content: "Blog",
        },
        {
          property: "og:description",
          content:
            "Corneel heeft wat te vertellen. In het blog vind je artikelen over webdevelopment, webdesign, tips en tricks, trends en ontwikkelingen en nog veel meer.",
        },
        {
          property: "og:image",
          content: "/assets/img/screenshot-home.jpg",
        },
      ],
      bodyAttrs: {
        class: "blog",
      },
    };
  },
  directives: {
    imagesLoaded,
  },
  components: {
    ContactMe,
    BlogMainImage,
    BlogTeaserImage,
  },
  methods: {
    layout(instance, image) {
      let msnry = new Masonry(this.$refs.grid, {
        itemSelector: ".blog-post__teaser",
        columnWidth: ".grid-sizer",
        gutter: ".gutter-sizer",
        percentPosition: true,
      });
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
.gutter-sizer {
  width: 0;

  @media (min-width: $md) {
    width: 4%;
  }
  @media (min-width: $lg) {
    width: 3%;
  }
}
.grid-sizer {
  width: 100%;

  @media (min-width: $md) {
    width: 48%;
  }
  @media (min-width: $lg) {
    width: 31.333333%;
  }
}
.blog-post__teaser {
  background-color: var(--color-white);
  padding-bottom: 1rem;
  margin-top: 2rem;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;

  @media (min-width: $md) {
    width: 48%;
  }
  @media (min-width: $lg) {
    width: 31.333333%;
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
