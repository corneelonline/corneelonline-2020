// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config()

// Make the SASS available in all files
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/*.scss')
      ],
    })
}

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  token: process.env.TOKEN, // create read/write token when using this
  useCdn: false // `false` if you want to ensure fresh data
})

// Declare modules
module.exports = {
  siteName: 'Corneel Online',
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: process.env.PROJECT_ID,
        dataset: process.env.DATASET,
        // Token is only required if dataset is private
        // or `overlayDrafts` is set to true
        token: process.env.TOKEN,
        overlayDrafts: false,
        watchMode: false,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default'
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
          // Service Worker Options
          disableServiceWorker: false,
          serviceWorkerPath: 'service-worker.js',
          cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
          disableTemplatedUrls: false,       // Optional

          // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
          manifestPath: 'manifest.json',
          title: 'Corneel Online',
          startUrl: '/',
          display: 'standalone',
          statusBarStyle: 'default',
          themeColor: '#666600',
          backgroundColor: '#ffffff',
          icon: 'favicon.png',
          shortName: 'Corneel',              // Optional
          description: 'Web development met een missie',// Optional
          categories: ['development'],          // Optional
          lang: 'nl_NL',                      // Optional
          dir: 'auto',                        // Optional
          maskableIcon: true,                 // Optional
          screenshots: [                      // Optional
              {
                  src: 'src/screenshot1.png',
                  sizes: '1280x720',
                  type: 'image/png',
              },
          ],
      }
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#000000",
        icon_path: "./src/assets/images/logo-corneel.svg",
        name: "Corneel Online",
        short_name: "Corneel",
        theme_color: "#FFFFFF",
        lang: "nl",
      },
    },
    {
      use: "gridsome-plugin-service-worker",
      options: {
        precachedRoutes: ["/"],
        cacheFirst: {
          cacheName: "cf-v1",
          routes: ["/"],
        },
      },
    },
  ],
  templates: {
    SanityProject: [
      {
        path: '/projecten/:title',
        component: './src/templates/SanityProject.vue'
      }
    ],
    SanityPost: [
      {
        path: '/blog/:title',
        component: './src/templates/SanityPost.vue'
      }
    ]
  },
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })

    config.mode('development')
	}
}
