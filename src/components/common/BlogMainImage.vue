<template>
  <img 
    :src="srcSmall"
    :srcset="srcSet"
    :alt="imgAlt">
</template>

<script>
export default {
  name: 'BlogMainImage',
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
      return `${this.imgSrc}?w=480`
    },
    srcSet() {
      return `${this.imgSrc}?w=480 320w, ${this.imgSrc}?w=640 576w, ${this.imgSrc}?w=850 768w, ${this.imgSrc}?w=940 992w, ${this.imgSrc} 1200w`
    }
  }
}
</script>