import React from "react"
import { PostsWrapper } from "../elements"
import { PostCard } from "../components"

export const Posts = ({ data }) => {
  // console.log(data)
  return (
    <PostsWrapper>
      <h1
        style={{
          fontSize: "3.125rem",
          marginBottom: "2rem",
          fontWeight: "800",
          color: "#E7F0FF",
        }}
      >
        Latest
      </h1>
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
