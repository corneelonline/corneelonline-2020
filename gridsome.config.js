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

// client.delete({
//   query: `*[_type == "term"]`
// })

// Declare modules
module.exports = {
  siteName: 'Corneel Online',
  siteUrl: 'https://corneel-2020.netlify.app',
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
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/exclude-me'],
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2020-11-19',
          },
          '/projecten/*': {
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: '2020-11-19',
          }
        }
      }
    }
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
