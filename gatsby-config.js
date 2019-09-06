module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    title: 'Front End Masters Gatsby Workshop',
    description: 'A site build together at FEM'
  },
  plugins: ['gatsby-plugin-emotion', 'gatsby-plugin-react-helmet']
};
=======
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
>>>>>>> 778db745c1565d6f55daa2be4e8a73cea633048f
