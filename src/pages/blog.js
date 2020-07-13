import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout, SEO, Posts, Search } from "../components"
import { useFlexSearch } from "react-use-flexsearch"
import * as queryString from "query-string"
import { TITLE } from "../elements"

const BlogPage = ({ data, ...props }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout page="blog">
      <SEO title="Blog" />
      <TITLE>All blog</TITLE>
      <Search posts={posts} {...props} />
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
