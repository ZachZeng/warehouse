import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO } from "../components"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout page="blog">
      <SEO title="Team" />
      <h1>All blog</h1>
    </Layout>
  )
}

export default BlogPage

export const postQuery = graphql`
  query postQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { ne: "project" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "MMM Do YYYY")
            title
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
