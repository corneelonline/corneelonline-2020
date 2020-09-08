<template>
  <div class="layout">
		<ContactBar />
    <PageHeader />
    <main id="main">
      <slot/>
    </main>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '~/components/layout/PageHeader.vue'
import PageFooter from '~/components/layout/PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>

</style>
