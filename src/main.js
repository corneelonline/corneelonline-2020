// This is the main.js file. Import global CSS and scripts here.
import '~/assets/styles/main.scss'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'nl' }
}
