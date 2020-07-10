import React from "react"
import { Layout, SEO, Projects, Posts, ProjectCard } from "../components"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from "reactstrap"

const IndexPage = ({ data }) => {
  const posts = data.posts.edges
  const projects = data.projects.edges
  return (
    <Layout page="home">
      <SEO title="Home" />
      <Posts data={posts} />
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
