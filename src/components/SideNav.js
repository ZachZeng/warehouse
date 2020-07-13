import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { SideNavWrapper } from "../elements"
import { NavButton } from "../components"

export const SideNav = ({ page }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
      home: file(relativePath: { eq: "home.svg" }) {
        publicURL
      }
      blog: file(relativePath: { eq: "blog.svg" }) {
        publicURL
      }
      playground: file(relativePath: { eq: "playground.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <SideNavWrapper>
      <Link to="/" fade className="logo">
        <img src={data.logo.publicURL} alt="My logo" />
      </Link>
      <div className="NavButtons">
        <NavButton
          href="/blog"
          icon={data.blog.publicURL}
          active={page === "blog"}
        >
          Blog
        </NavButton>
        <NavButton
          href="/playground"
          icon={data.playground.publicURL}
          active={page === "playground"}
        >
          Playground
        </NavButton>
      </div>
    </SideNavWrapper>
  )
}
