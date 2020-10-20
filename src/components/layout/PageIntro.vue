<template>
  <section class="page-intro">
    <h1>{{ title }}</h1>
    <h2 class="headline" v-if="headline !== ''">{{ headline }}</h2>
    <p v-if="intro !== ''">{{ intro }}</p>
  </section>
</template>

<script>
export default {
  name: 'PageIntro',
  props: ['title', 'headline', 'intro']
}
</script>

<style scoped lang="scss">
.page-intro {
  @include container-narrow-half;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>