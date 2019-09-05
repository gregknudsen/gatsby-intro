module.exports = {
  siteMetadata: {
    title: 'Frontend Masters Gatsby Introduction',
    description: 'Fun was had by all!',
    email: 'abc@123.com'
  },
  plugins: ['gatsby-plugin-emotion',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      defaultLayouts: {
        default: require.resolve('./src/components/layout.js'),
      }
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: 'posts'
    }
  }
]
}