<template>
  <div class="page">
		<DebugBar />
    <AppHeader />
    <main id="main">
      <slot/>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import DebugBar from '~/components/layout/DebugBar.vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'

export default {
  components: {
    DebugBar,
    AppHeader,
    AppFooter
  }
}
</script>

<style>

</style>
