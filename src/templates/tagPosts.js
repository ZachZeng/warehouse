import React from "react"
import { graphql } from "gatsby"
import { Button, Badge } from "reactstrap"
import { slugify } from "../utils/utilityFunctions"
import { SEO, Layout, Posts } from "../components"
import { TITLE } from "../elements"

const TagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `Tag: ${tag}`

  return (
    <Layout>
      <TITLE>{pageHeader}</TITLE>
      <Posts data={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
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
export default TagPosts
