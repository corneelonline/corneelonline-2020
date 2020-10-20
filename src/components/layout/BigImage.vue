<template>
  <section class="big-image">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'BigImage'
}
</script>

<style scoped lang="scss">
.big-image {
  width: 100%;
  padding: 0;
}
</style>