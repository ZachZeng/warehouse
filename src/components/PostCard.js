import React from "react"
import {
  PostCardWrapper,
  PostCardTitle,
  PostCardTime,
  PostCardTags,
  PostCardTag,
} from "../elements"
import { slugify } from "../utils/utilityFunctions"

export const PostCard = ({ title, slug, date, tags }) => {
  return (
    <PostCardWrapper to={`/${slug}`}>
      <PostCardTime>{date}</PostCardTime>
      <PostCardTitle>{title}</PostCardTitle>
      <PostCardTags>
        {tags &&
          tags.map(tag => (
            <PostCardTag to={`/tag/${slugify(tag)}`} key={tag} tag={tag}>
              {tag}
            </PostCardTag>
          ))}
      </PostCardTags>
    </PostCardWrapper>
  )
}
