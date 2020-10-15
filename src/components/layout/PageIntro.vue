<template>
  <section class="page-intro">
    <h1>{{ title }}</h1>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'PageIntro',
  props: ['title']
}
</script>

<style lang="scss">
.page-intro {
  @include container-narrow-half;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>