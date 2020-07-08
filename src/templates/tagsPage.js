import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Button, Badge } from "reactstrap"
import { slugify } from "../utils/utilityFunctions"

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="Tags">
      <SEO title="All tags" keyword={["tags"]} />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color="primary" href={`/tags/${slugify(tag)}`}>
              {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TagsPage
