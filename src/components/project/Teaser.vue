<template>
  <div class="project__teaser">
    <g-link to="/projecten/">
      <figure class="project-img">
        <g-image src="~/assets/images/dummy-project-1.png" width="168" alt="project img" />
      </figure>
    </g-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectTeaser',
  props: ['title']
}
</script>

<style lang="scss">
.project__teaser {
  width: 204px;
  height: 143px;
  margin-bottom: 2rem;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.project-img {
  display: block;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/bg/laptop.svg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;

  img {
    position: absolute;
    top: 12px;
    left: 17px;
  }
}
</style>