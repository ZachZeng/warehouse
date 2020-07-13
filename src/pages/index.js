import React from "react"
import { Layout, SEO, Projects, Posts } from "../components"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const posts = data.posts.edges
  const projects = data.projects.edges
  return (
    <Layout page="home">
      <SEO title="Home" />
      <Posts data={posts} title />
      <Projects data={projects} />
    </Layout>
  )
}

export const indexQuery = graphql`
  query MyQuery {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { ne: "project" } } }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "MMM DD, YYYY")
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
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "MMM DD, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
