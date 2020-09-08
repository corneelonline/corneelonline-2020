<template>
  <button class="menu-toggler" aria-label="menu" v-on:click="showMainMenu" v-bind:class="{ active: menuVisible }">
    <span class="menu-hamburger">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'MenuToggler',
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
.menu-toggler {
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  border: none;
  background: transparent;
  padding: 0;

  &:focus {
    outline:0;
  }

  @media (min-width: var(--md)) {
    right: 20px;
  }
  @media (min-width: var(--lg)) {
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
    background: var(--color__blue-dark);
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