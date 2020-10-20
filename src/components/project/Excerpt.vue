<template>
  <div class="project-excerpt">
    <g-link class="project-details" :to="project.path">
      <figure class="project-excerpt__img">
        <g-image :src="project.main_image" alt="project img" />
      </figure>
      <div class="project-excerpt__body">
        <h3>{{project.title}}</h3>
        <p v-html="project.summary"/>
        <button class="button">Meer over deze case</button>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectExcerpt',
  props: {
    project: Object
  }
}
</script>

<style scoped lang="scss">
.project-excerpt {
  margin-bottom: 3rem;

  .project-details {
    text-decoration: none;
    color: var(--color-text-main);
  
    @media (min-width: $sm) {
      display: flex;
      justify-content: space-between;
    }
  }
}
.project-excerpt__img {
  display: block;
  width: 204px;
  height: 143px;
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
    top: 12px;
    left: 17px;
    width: 82.5%;
  
    @media (min-width: $sm) {
      top: 14px;
      left: 20px;
      width: 83.5%;
    }
    @media (min-width: $md) {
      top: 17px;
      left: 24px;
      width: 78.5%;
    }
    @media (min-width: $lg) {
      top: 24px;
      left: 34px;
      width: 83.4%;
    }
    @media (min-width: $xl) {
      top: 31px;
      left: 44px;
      width: 83.8%;
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
}
</style>