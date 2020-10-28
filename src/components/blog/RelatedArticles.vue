<template>
  <div class="related-articles" v-if="this.showComponent">
    <h3>Gerelateerde artikelen</h3>
    <div class="related-articles__body">
      <article class="blog-post__teaser" v-for="relatedPost in this.relPosts" :key="relatedPost.id">
        <g-link class="post-details" :to="relatedPost.path">
          <figure class="cover-image">
            <g-image :src="relatedPost.mainImage.asset.url" alt="blog cover image" />
          </figure>
          <ul class="tags" v-if="relatedPost.tags">
            <li v-for="tag in relatedPost.tags" :key="tag.id">{{ tag }}</li>
          </ul>
          <h2>{{relatedPost.title}}</h2>
        </g-link>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RelatedArticles',
  props: {
    relPosts: Array,
  },
  computed: {
    showComponent: function () {
      return this.relPosts.length
    }
  }
}
</script>

<style scoped lang="scss">
.related-articles {

  h3 {
    @include header-narrow;
  }
  &__body {
    @include container;

    @media (min-width: $md) {
      display: flex;
      justify-content: space-between;
    }
    @media (min-width: $lg) {
      display: flex;
      justify-content: space-around;
    }

    &::after {
      @media (min-width: $lg) {
        content: "";
        width: 1px;
      }
    }
  }
}
.blog-post__teaser {
  background-color: var(--color-white);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: $md) {
    width: 48%;
  }
  @media (min-width: $lg) {
    width: 31.33333%;
  }

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
    margin: 0 1rem 1rem;
  }
}
</style>

  

