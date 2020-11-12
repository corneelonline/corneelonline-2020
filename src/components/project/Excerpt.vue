<template>
  <div class="project-excerpt">
    <g-link class="project-details" :to="project.path">
      <figure class="project-excerpt__img">
        <g-image :src="project.mainImage.asset.url" alt="project img" />
      </figure>
      <div class="project-excerpt__body">
        <h3>{{project.title}}</h3>
        <PortableText :blocks="project._rawIntroductionText" />
        <button class="button">Meer over deze case</button>
      </div>
    </g-link>
  </div>
</template>

<script>
import PortableText from '~/components/sanity/PortableText.vue'

export default {
  name: 'ProjectExcerpt',
  props: {
    project: Object
  },
  methods: {
    getPath(slug) {
      return `/projecten/${slug}/`;
    }
  },
  components: {
    PortableText
  }
}
</script>

<style scoped lang="scss">
.project-excerpt {
  margin-bottom: 3rem;

  @media (min-width: $md) {
    margin-bottom: 4rem;
  }

  .project-details {
    text-decoration: none;
    color: var(--color-text-main);
  
    @media (min-width: $sm) {
      display: flex;
      justify-content: space-between;
    }

    // img {
    //   // border: 5px solid var(--color-gray-dark);
    //   border: 5px solid yellow;
    // }
  }

  .project-details:hover {
    img {
      -webkit-box-shadow: 0px 0px 40px 5px var(--color-orange);
      -moz-box-shadow: 0px 0px 40px 5px var(--color-orange);
      box-shadow: 0px 0px 40px 5px var(--color-orange);
    }
  }
}
.project-excerpt__img {
  display: block;
  width: 260px;
  height: 200px;
  margin-bottom: 1rem;
  background-image: url('~@/assets/images/bg/laptop.svg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  
  @media (min-width: $sm) {
    width: 240px;
    height: auto;
  }
  @media (min-width: $md) {
    width: 320px;
  }
  @media (min-width: $lg) {
    width: 410px;
    height: 300px;
  }
  @media (min-width: $xl) {
    width: 540px;
    height: 400px;
  }

  img {
    position: absolute;
    border: 2px solid var(--color-gray-dark);
    top: 14px;
    left: 20px;
    width: 84.2%;
  
    @media (min-width: $sm) {
      border: 3px solid var(--color-gray-dark);
      top: 11px;
      left: 17px;
      width: 86%;
    }
    @media (min-width: $md) {
      border: 5px solid var(--color-gray-dark);
      top: 15px;
      left: 23px;
      width: 85.5%;
    }
    @media (min-width: $lg) {
      border: 5px solid var(--color-gray-dark);
      top: 19px;
      left: 29px;
      width: 86%;
    }
    @media (min-width: $xl) {
      border: 8px solid var(--color-gray-dark);
      top: 25px;
      left: 38px;
      width: 86%;
    }
  }
}
.project-excerpt__body {
  width: auto;

  @media (min-width: $sm) {
    width: 50%;
  }
  @media (min-width: $lg) {
    width: 40%;
  }

  h3 {
    color: var(--color-orange);
    
    @media (min-width: $md) {
      @include font-size(1.5); // 24px
    }
    @media (min-width: $lg) {
      @include font-size(1.5); // 24px
    }
  }

  p {
    @include font-size(1.0625);
  }
}
</style>