<template>
  <div class="project__teaser">
    <g-link :to="project.path">
      <figure class="project-img">
        <g-image :src="project.banner_image_url" alt="project img" />
      </figure>
    </g-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectTeaser',
  props: {
    project: Object
  }
}
</script>

<style lang="scss">
.project__teaser {
  width: 100%;
  height: 143px;
  
  @media (min-width: $md) {
    height: 183px;
  }
  @media (min-width: $lg) {
    height: 218px;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.project-img {
  display: block;
  width: 204px;
  height: 143px;
  background-image: url('~@/assets/images/bg/laptop.svg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  margin: 0 auto;
  
  @media (min-width: $md) {
    width: 261px;
    height: 183px;
  }
  @media (min-width: $lg) {
    width: 311px;
    height: 218px;
  }

  img {
    position: absolute;
    top: 12px;
    left: 17px;
    width: 83%;
  
    @media (min-width: $md) {
      top: 16px;
      left: 22px;
    }
    @media (min-width: $lg) {
      top: 18px;
      left: 25px;
    }
  }
}
</style>