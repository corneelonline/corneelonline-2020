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
  border: 1px dashed red;
  height: 100px;
  position: relative;
  background-color: var(--color-white);

  @media (min-width: $md) {
    border: 1px dashed blue;
    // @include box-shadow-soft;
    margin-left: -20px;
    margin-right: -20px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (min-width: $lg) {
    height: 85px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: var(--color-white);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
}
// the logo
.logo {
  display: block;
  width: 200px;
  height: 88px;
  // background-image: url('~@/assets/images/layout/logo.svg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
  text-indent: -9000px;

  @media (min-width: $lg) {
    margin-left: 30px;
    margin-top: -44px;
  }
}
// the main navigation menu
#mainnav {
  display: none;
  // font-weight: var(--font__weight-regular);
  z-index: 1;

  @media (min-width: $lg) {
    // border: 1px dashed blue;
    width: calc(100% - 240px);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: $lg) {
    padding-left: var(--gutter-lg);
    padding-right: var(--gutter-md);
  }
  // when toggled active on mobule devices
  &.active {
    // @include box-shadow-soft;
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    transition: .2s all ease-in;
  }
  .nav__link {
    text-decoration: none;
    line-height: 2em;
    color: var(--color-blue-dark);
    letter-spacing: 2px;
    display: inline-block;
    border: 1px solid var(--color-white);
    padding: 0 var(--gutter-xs);
    
    &.active {
      color: var(--color-orange);
      border: 1px solid var(--color-orange);
    }
  }
}
// the menu toggler button
.menu-toggler {
  position: absolute;
  top: 42px;
  right: 0;
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
    background: var(--color-blue-dark);
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