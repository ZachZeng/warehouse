import React from "react"
import { Link } from "gatsby"
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Badge,
} from "reactstrap"
import { PostCardWrapper } from "../elements"
import Img from "gatsby-image"
import { slugify } from "../utils/utilityFunctions"

export const PostCard = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    <PostCardWrapper>
      <Link to={slug}>
        <Img className="card-image-top" fluid={fluid} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>
            <span className="text-info">{date}</span> by{" "}
            <span className="text-info">{author}</span>
          </CardSubtitle>
          <CardText>{body}</CardText>
          <ul className="post-tags">
            {tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="primary" className="text-uppercase">
                    {tag}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Link>
    </PostCardWrapper>
  )
}
