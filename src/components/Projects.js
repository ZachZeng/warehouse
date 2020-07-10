import React from "react"
import { ProjectsWrapper } from "../elements"
import { ProjectCard } from "../components"

export const Projects = ({ data }) => {
  return (
    <>
      <h1
        style={{
          fontSize: "3.125rem",
          marginBottom: "2rem",
          fontWeight: "800",
          color: "#E7F0FF",
        }}
      >
        Projects
      </h1>
      <ProjectsWrapper>
        {data.map(d => (
          <ProjectCard
            key={d.node.id}
            title={d.node.frontmatter.title}
            body={d.node.excerpt}
            date={d.node.frontmatter.date}
            fluid={d.node.frontmatter.image.childImageSharp.fluid}
          />
        ))}
      </ProjectsWrapper>
    </>
  )
}
