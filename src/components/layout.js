/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import '../styles/index.scss'
import Footer from "./Footer"
import Header from "./Header"
import { Row, Col } from 'reactstrap'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossOrigin="anonymous"></link>
      <Row>
        <Col xs="2">
          <Header siteTitle={data.site.siteMetadata.title} />
        </Col>
        <Col xs="4">
          <div className="container" id="content">
            <main>{children}</main>
          </div>
          <Footer />
        </Col>
      </Row>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
