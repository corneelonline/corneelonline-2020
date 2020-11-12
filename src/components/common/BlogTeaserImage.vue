<template>
  <img 
    :src="srcSmall"
    :srcset="srcSet"
    :alt="imgAlt">
</template>

<script>
export default {
  name: 'BlogTeaserImage',
  props: {
    imgSrc: {
      type: String,
      default: null
    },
    imgAlt: {
      type: String,
      default: "hoofdafbeelding van het artikel"
    }
  },
  computed: {
    srcSmall() {
      return `${this.imgSrc}?w=482`
    },
    srcSet() {
      return `${this.imgSrc}?w=482 320w`
    }
  }
}
</script>