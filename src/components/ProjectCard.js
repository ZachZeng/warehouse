import React from "react"
import { Link } from "gatsby"
import {
  ProjectCardWrapper,
  ProjectCardImage,
  ProjectCardTime,
  ProjectCardBody,
  ProjectCardTitle,
} from "../elements"

export const ProjectCard = ({ title, date, body, fluid }) => {
  return (
    <ProjectCardWrapper to={"/"}>
      <ProjectCardImage fluid={fluid} />
      <ProjectCardTitle>{title}</ProjectCardTitle>
      <ProjectCardTime>{date}</ProjectCardTime>
      <ProjectCardBody>{body}</ProjectCardBody>
    </ProjectCardWrapper>
  )
}
