<template>
  <header class="banner" v-bind:class="{ active: menuVisible }">
    <g-link class="logo" to="/">{{ $static.metadata.siteName }}</g-link>
    <button class="menu-toggler" aria-label="menu" v-on:click="showMainMenu" v-bind:class="{ active: menuVisible }">
      <span class="menu-hamburger">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </span>
    </button>
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
export default {
  name: 'PageHeader',
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
// the header section
.banner {
  height: 100px;
  position: relative;
  background-color: var(--color-background-header);

  @media (min-width: $lg) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
}
// the logo
.logo {
  position: absolute;
  top: 25px;
  left: 20px;
  display: block;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: var(--color-gray);
  color: var(--color-black);

  @media (min-width: $lg) {
    position: static;
    margin-left: 20px;
    margin-right: 20px;
  }
}
// the main navigation menu
#mainnav {
  display: none;
  z-index: 1;

  @media (min-width: $lg) {
    width: calc(100% - 240px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  // when toggled active on mobule devices
  &.active {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    height: calc(100vh - 100px);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--color-gray-lighter);
    transition: .2s all ease-in;
  }
  .nav__link {
    text-decoration: none;
    line-height: 2em;
    color: var(--color-black);
    display: inline-block;
    padding: 0 var(--gutter-xs);
    margin: var(--gutter-sm) 0;

    @media (min-width: $lg) {
      border: 1px solid var(--color-gray);
      margin: 0;
    }
    
    &.active {
      color: var(--color-orange);

      @media (min-width: $lg) {
        border: 1px solid var(--color-black);
      }
    }
  }
}
// the menu toggler button
.menu-toggler {
  position: absolute;
  top: 40px;
  right: 20px;
  display: flex;
  border: none;
  background: transparent;
  padding: 0;

  &:focus {
    outline:0;
  }

  @media (min-width: $md) {
    right: 20px;
  }
  @media (min-width: $lg) {
    display: none;
  }
}
.menu-hamburger {
  display: inline-block;
  width: 30px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .icon-bar {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: var(--color-black);
    transition: .2s all ease-in;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
.menu-toggler.active {
  .icon-bar {
    &:first-child {
      width: 110%;
      transform: rotate(40deg);
      transform-origin: left top;
      transition: .2s all ease-in;
    }
    &:nth-child(2) {
      display: none;
    }
    &:last-child {
      width: 110%;
      transform: rotate(-40deg);
      transform-origin: left bottom;
      transition: .2s all ease-in;
    }
  }
}
</style>