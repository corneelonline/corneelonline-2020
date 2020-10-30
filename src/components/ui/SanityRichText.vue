<template>
  <SanityRichText 
    :blocks="blocks"
    :serializers="serializers" 
  />
</template>

<script>
import SanityRichText from 'sanity-blocks-vue-component'

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
          internalLink: ({mark, children}) => {
            const {slug = {}} = mark
            const href = `/${slug.current}`
            return <a href={href}>{children}</a>
          }
        },
        link: ({mark, children}) => {
          // Read https://css-tricks.com/use-target_blank/
          const { blank, href } = mark
          return blank ?
            <a href={href} target="_blank" rel="noopener">{children}</a>
            : <a href={href}>{children}</a>
        }
      }
    };
  }
}
</script>