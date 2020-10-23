<template>
  <div class="related-articles" v-if="this.relPaths.length" >
    <h3>Gerelateerde artikelen</h3>
    <div class="related-articles__body">
      <article class="blog-post__teaser" v-for="item in this.postObjects" :key="item.id">
        <g-link class="post-details" :to="item.path">
          <figure class="cover-image">
            <g-image :src="item.main_image" alt="blog cover image" />
          </figure>
          <ul class="tags" v-if="item.tags">
            <li v-for="tag in item.tags" :key="tag.id">{{ tag }}</li>
          </ul>
          <h2>{{item.title}}</h2>
        </g-link>
      </article>
    </div>
  </div>
</template>

<script>
import { fetch } from 'gridsome'

export default {
  name: 'RelatedArticles',
  props: {
    relPaths: Array,
  },
  data () {
    return {
      postPaths: [],
      postObjects: []
    }
  },
  methods: {
    setPostPath(startpath) {
      let arr = startpath.split("/");
      console.dir(arr);
      let filename = arr[2].split(".");
      console.dir(filename);

      this.postPaths.push(`/blog/${filename[0]}/`);
    }
  },
  async mounted () {
    this.relPaths.forEach(element => this.setPostPath(element));
    this.postPaths.forEach(async elem => {
      try {
        const results = await this.$fetch(elem);
        this.postObjects.push(results.data.post);
      } catch (error) {
        console.log(error);
      }
    })
  },
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
        width: 31.33333%;
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

  

