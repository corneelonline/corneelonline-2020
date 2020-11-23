<template>
  <div class="page">
    <AppHeader />
    <main id="main">
      <slot/>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
