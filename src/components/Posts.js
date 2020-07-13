import React from "react"
import { PostsWrapper, TITLE } from "../elements"
import { PostCard } from "../components"

export const Posts = ({ data, title }) => {
  // console.log(data)
  return (
    <PostsWrapper>
      {title && <TITLE>Latest</TITLE>}

      {data.map(d => (
        <PostCard
          key={d.node.id}
          title={d.node.frontmatter.title}
          slug={d.node.fields.slug}
          date={d.node.frontmatter.date}
          tags={d.node.frontmatter.tags}
        />
      ))}
    </PostsWrapper>
  )
}
