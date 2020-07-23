module.exports = {
  siteMetadata: {
    title: `WAREHOUSE`,
    description: `ZachZeng's blog recording interesting thoughts`,
    author: `ZachZeng`,
  },
  pathPrefix: `/warehouse`,
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
        path: `${__dirname}/src/files/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/files/projects`,
      },
    },

    //markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              wrapperStyle: `
                margin: 4rem auto;
                box-shadow: 0 0 30px rgba(0,0,0,0.5);
              `,
              markdownCaptions: true,
            },
          },
          "gatsby-remark-prismjs",
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

    //fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`muli\:300,400,700,800`],
        display: `swap`,
      },
    },

    //search
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: "pages",
        engine: "flexsearch",
        engineOptions: {
          encode: "icase",
          tokenize: "forward",
          async: false,
        },
        query: `
        {
          allMarkdownRemark(
            filter: { frontmatter: { tags: { ne: "project" } } }
          ) {
            nodes {
              id
              frontmatter {
                title
                tags
                date(formatString: "MMMM DD,YYYY")
              }
              fields {
                slug
              }
              rawMarkdownBody
            }
          }
        }
        `,
        ref: "id",
        index: ["title", "body", "tags"],
        store: ["id", "slug", "title", "tags", "date"],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            slug: node.fields.slug,
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
            tags: node.frontmatter.tags,
            date: node.frontmatter.date,
          })),
      },
    },

    //animation
    `gatsby-plugin-transition-link`,
  ],
}
