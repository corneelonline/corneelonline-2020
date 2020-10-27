<template>
  <header class="banner" v-bind:class="{ active: menuVisible }">
    <g-link id="logo" v-bind:class="{ inverted: menuVisible }" to="/">{{ $static.metadata.siteName }}</g-link>
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
      <g-link class="nav__link" to="/over-corneel/">Over Corneel</g-link>
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

<style scoped lang="scss">
// -------------------------------------
// the header section
// -------------------------------------
.banner {
  // var definitions
  --banner-height-xs: 100px;
  --banner-height-md: 130px;
  --banner-height-lg: 130px;

  // styles
  height: var(--banner-height-xs);
  position: relative;

  @media (min-width: $md) {
    height: var(--banner-height-md);
  }
  @media (min-width: $lg) {
    @include container;
    height: var(--banner-height-lg);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    // background-color: darken(rgb(255,240,109), 20%);
  }

  &.active {
    background-color: var(--color-black);
    z-index: 2;
  }
}
// -------------------------------------
// the logo
// -------------------------------------
#logo {
  position: absolute;
  top: 25px;
  left: 1rem;
  display: block;
  width: 57px;
  height: 50px;
  text-indent: -9000px;
  background-image: url('~@/assets/images/logo-corneel.svg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: $md) {
    left: 2rem;
    width: 100px;
    height: 87px;
  }

  @media (min-width: $lg) {
    position: static;
    margin-right: 70px;
  }

  &.inverted {
    background-image: url('~@/assets/images/logo-corneel-inverted.svg');
  }
}
// -------------------------------------
// the main navigation menu
// -------------------------------------
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
    top: var(--banner-height-xs);
    left: 0;
    width: 100%;
    height: calc(100vh - ( var(--banner-height-xs) ));
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--color-black);
    transition: .2s all ease-in;

    @media (min-width: $md) {
      top: var(--banner-height-md);
      height: calc(100vh - ( var(--banner-height-md) ));
      padding-top: 1rem;
    }
  }
  .nav__link {
    font-family: var(--ff-header);
    @include font-size(1.125);
    text-transform: uppercase;
    text-decoration: none;
    line-height: 2rem;
    color: var(--color-white);
    display: inline-block;
    padding: 0 var(--gutter-xs);
    margin: var(--gutter-sm) 0;
    width: 100%;
    background-image: url('~@/assets/images/arrow-white-right.svg');
    background-position: calc(100% - (var(--gutter-xs))) 50%;
    background-repeat: no-repeat;
    background-size: 19px 15px;

    @media (min-width: $lg) {
      color: var(--color-black);
      width: auto;
      height: 5rem;
      line-height: 5rem;
      margin: 0;
      background-image: none;
    }
    
    &.active {
      color: var(--color-orange);
      background-image: url('~@/assets/images/arrow-orange-right.svg');

      @media (min-width: $lg) {
        background-image: url('~@/assets/images/arrow-orange-down.svg');
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: 1.125em 1.5rem;
      }
    }
  }
}
// -------------------------------------
// the menu toggler button
// -------------------------------------
.menu-toggler {
  position: absolute;
  top: 40px;
  right: 1rem;
  display: flex;
  border: none;
  background: transparent;
  padding: 0;

  &:focus {
    outline:0;
  }

  @media (min-width: $md) {
    top: 50px;
    right: 2rem;
  }
  @media (min-width: $lg) {
    display: none;
  }
}
.menu-hamburger {
  display: inline-block;
  width: 36px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .icon-bar {
    width: 100%;
    height: 2px;
    background: var(--color-orange);
    transition: .2s all ease-in;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
.menu-toggler.active {
  .icon-bar {
    &:first-child {
      width: 90%;
      transform: rotate(-45deg);
      transform-origin: right top;
      transition: .2s all ease-in;
    }
    &:nth-child(2) {
      display: none;
    }
    &:last-child {
      width: 90%;
      transform: rotate(45deg);
      transform-origin: right bottom;
      transition: .2s all ease-in;
    }
  }
}
</style>