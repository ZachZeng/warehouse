import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { SideNavWrapper } from "../elements"
import { NavButton } from "."

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

  const currentPage = page
  return (
    <SideNavWrapper>
      <Link to="/" className="logo">
        <img src={data.logo.publicURL} alt="My logo" />
      </Link>
      <div className="NavButtons">
        <NavButton
          href="/team"
          icon={data.home.publicURL}
          active={page === "home"}
        >
          Home
        </NavButton>
        <NavButton
          href="/tags"
          icon={data.blog.publicURL}
          active={page === "blog"}
        >
          Blog
        </NavButton>
        <NavButton
          href="/about"
          icon={data.playground.publicURL}
          active={page === "playground"}
        >
          Playground
        </NavButton>
      </div>
    </SideNavWrapper>
  )
}
