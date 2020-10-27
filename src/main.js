// This is the main.js file. Import global CSS and scripts here.
import '~/assets/styles/main.scss'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

import BlockContent from 'sanity-blocks-vue-component'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.component('block-content', BlockContent)

  // Add Google webfonts
  head.link.push({
    rel: 'stylesheet',
    href: encodeURI('https://fonts.googleapis.com/css2?family=Oswald&family=Source+Serif+Pro:wght@400;700&display=swap')
  })

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'nl' }
  
  // Add attributes to BODY tag
  // head.bodyAttrs = { class: 'page' }
}
