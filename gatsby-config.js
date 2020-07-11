module.exports = {
  siteMetadata: {
    title: `WAREHOUSE`,
    description: `ZachZeng's blog recording interesting thoughts`,
    author: `ZachZeng`,
  },
  plugins: [
    //for seo head
    `gatsby-plugin-react-helmet`,

    //filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/files`,
      },
    },

    //markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },

    //image
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,

    //fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`muli\:300,400,700,800`],
        display: `swap`,
      },
    },
  ],
}
