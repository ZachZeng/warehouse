/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { slugify } = require("./src/utils/utilityFunctions")
const path = require("path")
const _ = require("lodash")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
    singlePost: path.resolve("src/templates/singlePost.js"),
    tagsPage: path.resolve("src/templates/tagsPage.js"),
    tagPosts: path.resolve("src/templates/tagPosts.js"),
    postList: path.resolve("src/templates/postList.js"),
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    const posts = res.data.allMarkdownRemark.edges

    //create single blog post pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates.singlePost,
        context: {
          slug: node.fields.slug,
        },
      })
    })

    //get all tags
    let tags = []
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    let tagPostCounts = {}
    tags.forEach(tag => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    tags = _.uniq(tags)

    //create tags page
    createPage({
      path: "/tags",
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts,
      },
    })

    //create tag post page
    tags.forEach(tag => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPosts,
        context: {
          tag,
        },
      })
    })

    const postsPerPage = 2
    const numOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      createPage({
        path: `/page/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage,
          numOfPages,
        },
      })
    })
  })
}
