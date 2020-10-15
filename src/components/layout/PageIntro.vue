<template>
  <section class="page-intro">
    <h1>{{ title }}</h1>
    <h2 class="headline" v-if="headline !== ''">{{ headline }}</h2>
    <p>{{ introduction_text }}</p>
  </section>
</template>

<script>
export default {
  name: 'PageIntro',
  props: ['title', 'headline', 'introduction_text']
}
</script>

<style lang="scss">
.page-intro {
  @include container-narrow-half;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>