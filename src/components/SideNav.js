import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { SideNavWrapper } from "../elements"

export const SideNav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <SideNavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="My logo" />
      </Link>
      <Link to="/team">Team</Link>
      <Link to="/tags">Tags</Link>
      <Link to="/about">About</Link>
    </SideNavWrapper>
  )
}
