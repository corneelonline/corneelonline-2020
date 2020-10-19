<template>
  <div class="featured-projects__teasers">
    <VueSlickCarousel v-bind="settings">
      <ProjectTeaser v-for="edge in $static.featuredProjects.edges" :key="edge.node.id" v-bind:project="edge.node"/>
    </VueSlickCarousel>
  </div>
</template>

<static-query>
query {
  featuredProjects: allProject(sortBy: "delivery_date", order: DESC, filter: { published: { eq: true }, featured: { eq: true }}) {
    edges {
			node {
        title
        main_image
        path
        summary
      }
    }
  }
}
</static-query>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ProjectTeaser from '~/components/project/Teaser.vue'

export default {
  name: 'ProjectSlider',
  components: {
    ProjectTeaser,
    VueSlickCarousel
  },
  data () {
    return {
      settings: {
        "arrows": true,
        "dots": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 3,
        "initialSlide": 0,
        "responsive": [
          {
            "breakpoint": 1100,
            "settings": {
              "slidesToShow": 2
            }
          },
          {
            "breakpoint": 576,
            "settings": {
              "slidesToShow": 1
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.featured-projects__teasers {
  height: 240px;

  @media (min-width: $md) {
    height: 260px;
  }
  @media (min-width: $lg) {
    height: 300px;
  }
}
.slick-slider {
  margin: 0 4rem;

  @media (min-width: $md) {
    margin: 0 6rem;
  }
  @media (min-width: $lg) {
    margin: 0 2rem;
  }
}
.slick-arrow {
  width: 25px;
  height: 20px;

  @media (min-width: $md) {
    width: 44px;
    height: 35px;
  }
  @media (min-width: $xl) {
    width: 52px;
    height: 42px;
  }

  &.slick-prev,
  &.slick-prev:hover,
  &.slick-prev:focus {
    background-image: url('~@/assets/images/arrow-black-left.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    &::before {
      content: none;
    }
  }
  &.slick-next,
  &.slick-next:hover,
  &.slick-next:focus {
    background-image: url('~@/assets/images/arrow-black-right.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    &::before {
      content: none;
    }
  }
}
.slick-dots li button::before {
  font-size: 10px;
  color: var(--color-black);
  opacity: 1;

  @media (min-width: $md) {
    font-size: 16px;
  }
  @media (min-width: $lg) {
    font-size: 12px;
  }
}
.slick-dots {
  @media (min-width: $md) {
    padding-top: 20px !important;
    bottom: -45px;
  }
}
.slick-dots li.slick-active button::before {
  font-size: 10px;
  color: var(--color-orange);
  opacity: 1;

  @media (min-width: $md) {
    font-size: 16px;
  }
  @media (min-width: $lg) {
    font-size: 12px;
  }
}
</style>