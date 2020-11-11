<template>
  <img 
    :src="srcSmall"
    :srcset="srcSet"
    :alt="imgAlt">
</template>

<script>
export default {
  name: 'ProjectImage',
  props: {
    imgSrc: {
      type: String,
      default: null
    },
    imgAlt: {
      type: String,
      default: "screenshot van het project"
    }
  },
  computed: {
    srcSmall() {
      return `${this.imgSrc}?w=170`
    },
    srcSet() {
      return `${this.imgSrc}?w=170 320w, ${this.imgSrc}?w=430 576w, ${this.imgSrc}?w=556 768w, ${this.imgSrc}?w=644 992w, ${this.imgSrc} 1200w`
    }
  }
}
</script>