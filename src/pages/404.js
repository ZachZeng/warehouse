import React from "react"

import { Layout, SEO } from "../components"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Oops! Something went wrong..</h1>
    <Link className="btn btn-primary text-uppercase" to={"/"}>
      Go home
    </Link>
  </Layout>
)

export default NotFoundPage
