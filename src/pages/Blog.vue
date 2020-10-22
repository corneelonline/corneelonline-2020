<template>
  <Layout>
    <section class="page-intro">
      <h1>Blog</h1>
    </section>
    <section class="blog-posts">
      <div class="grid" ref="grid" v-images-loaded:on.progress="layout">
        <div class="grid-sizer"></div>
        <div class="gutter-sizer"></div>
        <article class="blog-post__teaser" v-for="edge in $page.posts.edges" :key="edge.node.id">
          <g-link class="post-details" :to="edge.node.path">
            <figure class="cover-image">
              <g-image :src="edge.node.main_image" alt="blog cover image" />
            </figure>
            <ul class="tags" v-if="edge.node.tags">
              <li v-for="tag in edge.node.tags" :key="tag.id">{{ tag }}</li>
            </ul>
            <h2>{{edge.node.title}}</h2>
          </g-link>
        </article>
      </div>
    </section>
    <ContactMe />
  </Layout>
</template>

<page-query>
query {
  posts: allPost(sortBy: "date_published", order: DESC, filter: { published: { eq: true }}) {
		edges {
			node {
        id
        path
        title
        main_image
        tags
      }
    }
  }
}
</page-query>

<script>
import Masonry from 'masonry-layout'
import imagesLoaded from 'vue-images-loaded'
import ContactMe from '~/components/layout/ContactMe.vue'

export default {
  metaInfo: {
    title: 'Blog'
  },
  directives: {
    imagesLoaded
  },
  methods: {
    layout(instance, image) {
      let msnry = new Masonry(this.$refs.grid, {
        itemSelector: '.blog-post__teaser',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true
      });
    }
  },
  components: {
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
  // border: 1px solid red;
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
.grid-sizer,
.blog-post__teaser {
  width: 100%;

  @media (min-width: $md) {
    width: 48%;
  }
  @media (min-width: $lg) {
    width: 31.33333%;
  }
}
.blog-post__teaser {
  background-color: var(--color-white);
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  .post-details {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  h2 {
    @extend .h4;
    color: var(--color-orange);
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .cover-image {
    margin-bottom: 1rem;
  }

  .tags {
    margin: 0 1rem;
  }
}
.blog-post__teaser:first-of-type {
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
.tags {
  li {
    @include tag;
  }
}
</style>