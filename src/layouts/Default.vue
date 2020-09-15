<template>
  <div class="page">
		<DebugBar />
    <PageHeader />
    <main id="main">
      <slot/>
    </main>
    <PageFooter />
  </div>
</template>

<script>
import DebugBar from '~/components/utils/DebugBar.vue'
import PageHeader from '~/components/layout/PageHeader.vue'
import PageFooter from '~/components/layout/PageFooter.vue'

export default {
  components: {
    DebugBar,
    PageHeader,
    PageFooter
  }
}
</script>

<style>

</style>
