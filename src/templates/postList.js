import React from "react"
import Layout from "../components/Layout"
import PostCard from "../components/PostCard"
import { graphql } from "gatsby"
import Pagination from "../components/Pagination"

const PostList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numOfPages } = pageContext

  return (
    <Layout pageTitle={`Page: ${currentPage}`}>
      {posts.map(({ node }) => (
        <PostCard
          key={node.id}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          slug={node.fields.slug}
          date={node.frontmatter.date}
          body={node.excerpt}
          fluid={node.frontmatter.image.childImageSharp.fluid}
          tags={node.frontmatter.tags}
        />
      ))}
      <Pagination currentPage={currentPage} numOfPages={numOfPages} />
    </Layout>
  )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 370) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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

export default PostList
