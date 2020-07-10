import React from "react"
import { graphql } from "gatsby"
import { Button, Badge } from "reactstrap"
import { slugify } from "../utils/utilityFunctions"
import { SEO, Layout, PostCard } from "../components"

const TagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `Tag: ${tag}`

  return (
    <Layout>
      <h1
        style={{
          fontSize: "3.125rem",
          marginBottom: "2rem",
          fontWeight: "800",
          color: "#E7F0FF",
        }}
      >
        {pageHeader}
      </h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostCard
          key={node.id}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          slug={node.fields.slug}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
        />
      ))}
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
