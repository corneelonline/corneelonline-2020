// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config()
// console.log(process.env.PROJECT_ID);

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

// Declare modules
module.exports = {
  siteName: 'Corneel Online',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Webpage',
        path: './content/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: './content/projects/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Service',
        path: './content/services/**/*.md',
      }
    },
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
    }
  ],
  templates: {
    Webpage: '/:title',
    Post: '/blog/:title',
    Project: '/projecten/:title',
    Service: '/diensten/:title'
  },
  transformers: {
    remark: {
      //
    }
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
