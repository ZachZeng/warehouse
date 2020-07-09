import React from "react"
import { ContentWrapper } from "../elements"

export const Content = ({ children, pageTitle }) => {
  return (
    <ContentWrapper>
      <h1>pageTitle</h1>
      {children}
    </ContentWrapper>
  )
}
