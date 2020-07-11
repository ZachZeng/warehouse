import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { slugify } from "../utils/utilityFunctions"
import { Layout, SEO } from "../components"
import {
  H1,
  SUBTITLE,
  PostCardTags,
  PostCardTag,
  ArticleWrapper,
} from "../elements"
import Prism from "prismjs"
import "../themes/language-theme.css"

const SinglePost = ({ data }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const post = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={post.title} />
      <H1>{post.title}</H1>
      <SUBTITLE>{post.date}</SUBTITLE>
      <PostCardTags>
        {post.tags &&
          post.tags.map(tag => (
            <PostCardTag to={`/tag/${slugify(tag)}`} key={tag} tag={tag}>
              {tag}
            </PostCardTag>
          ))}
      </PostCardTags>
      <ArticleWrapper>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </ArticleWrapper>
      {/* <h3 className="text-center">Share this post</h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a
              href={
                "http://www.facebook.com/sharer/sharer.php?u=" +
                baseUrl +
                pageContext.slug
              }
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fa-2x" />
            </a>
          </li>
          <li>
            <a
              href={
                "http://www.twitter.com/share?url=" +
                baseUrl +
                pageContext.slug +
                "&text=" +
                post.title +
                "&via" +
                "twitterHandle"
              }
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x" />
            </a>
          </li>
          <li>
            <a
              href={
                "http://www.linkedin.com/shareArticle?url=" +
                baseUrl +
                pageContext.slug
              }
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
          </li>
        </ul>
      </div> */}
    </Layout>
  )
}

export default SinglePost

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
