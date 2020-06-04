module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: './three.r95.min.js',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/images/logo.png`
      },
    },
  ],
  siteMetadata: {
    title: `Steven McHenry`,
    description: `Portfolio for Steven McHenry`,
    author: `@Pixel++`,
  },
}
