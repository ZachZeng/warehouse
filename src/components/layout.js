/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { SideNav, Content } from "../components"
import { LayoutWrapper } from "../elements"

export const Layout = ({ children, page }) => {
  return (
    <LayoutWrapper>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
        integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
        crossOrigin="anonymous"
      ></link>
      <SideNav page={page} />
      <Content>{children}</Content>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
