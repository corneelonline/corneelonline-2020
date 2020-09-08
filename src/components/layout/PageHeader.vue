<template>
  <header class="banner" v-bind:class="{ active: menuVisible }">
    <g-link class="logo" to="/">{{ $static.metadata.siteName }}</g-link>
    <MenuToggler />
    <nav id="mainnav" class="nav" v-bind:class="{ active: menuVisible }">
      <g-link class="nav__link" to="/" exact>Home</g-link>
      <g-link class="nav__link" to="/diensten/">Diensten</g-link>
      <g-link class="nav__link" to="/projecten/">Projecten</g-link>
      <g-link class="nav__link" to="/blog/">Blog</g-link>
      <g-link class="nav__link" to="/over-ons/">Over ons</g-link>
      <g-link class="nav__link" to="/contact/">Contact</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MenuToggler from '~/components/ui/MenuToggler.vue'

export default {
  name: 'PageHeader',
  components: {
    MenuToggler
  },
  data() {
    return {
      menuVisible: false
    }
  },
  methods: {
    showMainMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
}
</script>

<style lang="scss">

</style>