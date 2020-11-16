<template>
  <div class="featured-projects__teasers">
    <VueSlickCarousel v-bind="settings">
      <ProjectTeaser v-for="edge in $static.featuredProjects.edges" :key="edge.node.id" v-bind:project="edge.node"/>
    </VueSlickCarousel>
  </div>
</template>

<static-query>
query {
  featuredProjects: allSanityProject(sortBy: "deliveryDate", order: DESC, filter: { featured: { eq: true }}) {
    edges {
			node {
        title
        path
        mainImage {
          asset {
            url
          }
        }
        slug {
          current
        }
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

  .project__teaser {
    width: 100%;
    height: 142px;
    
    @media (min-width: $md) {
      height: 158px;
    }
    @media (min-width: $lg) {
      height: 202px;
    }
  }

  .project-img {
    display: block;
    width: 180px;
    height: 142px;
    background-image: url('~@/assets/images/bg/laptop.svg');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    margin: 0 auto;
    
    @media (min-width: $md) {
      width: 220px;
      height: 158px;
    }
    @media (min-width: $lg) {
      width: 285px;
      height: 202px;
    }

    img {
      position: absolute;
      top: 11px;
      left: 16px;
      width: 83%;
    
      @media (min-width: $md) {
        top: 13px;
        left: 19px;
      }
      @media (min-width: $lg) {
        top: 17px;
        left: 24px;
      }
    }
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
    background-image: url('~@/assets/images/icons/arrow-black-left.svg');
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
    background-image: url('~@/assets/images/icons/arrow-black-right.svg');
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
    @include font-size(1);
  }
  @media (min-width: $lg) {
    @include font-size(0.75);
  }
}
.slick-dots {
  @media (min-width: $md) {
    padding-top: 20px !important;
    bottom: -45px;
  }
}
.slick-dots li.slick-active button::before {
  @include font-size(0.625);
  color: var(--color-orange);
  opacity: 1;

  @media (min-width: $md) {
    @include font-size(1);
  }
  @media (min-width: $lg) {
    @include font-size(0.75);
  }
}
</style>