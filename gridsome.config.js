// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

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
    }
  ],
  templates: {
    Webpage: '/:title',
    Post: '/blog/:title',
    Project: '/projecten/:title'
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
