<template>
  <SanityRichText 
    :blocks="blocks"
    :serializers="serializers" 
  />
</template>

<script>
import SanityRichText from 'sanity-blocks-vue-component'
import InternalLink from '~/components/sanity/InternalLink.vue'
import ExternalLink from '~/components/sanity/ExternalLink.vue'

export default {
  props: {
    blocks: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  components: {
    SanityRichText
  },
  data() {
    return {
      serializers: {
        marks: {
          internalLink: InternalLink,
          link: ExternalLink
        }
      }
    };
  }
}
</script>