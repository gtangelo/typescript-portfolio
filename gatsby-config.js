const path = require('path');

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Gabriel Ting`,
    description: `My personal portfolio website`,
    author: `@gtangelo`,
    siteUrl: `https://gtangelo.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        templates: path.join(__dirname, 'src/templates'),
        assets: path.join(__dirname, 'src/assets'),
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        data: path.join(__dirname, 'src/data'),
        views: path.join(__dirname, 'src/views'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-eslint',
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog/`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          `gatsby-remark-relative-images`,
        ],
      },
    },
  ],
};
