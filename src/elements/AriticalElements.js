import styled from "styled-components"
import "./TypographyElements"
import * as sharedStyle from "./SharedCSS"

export const ArticleWrapper = styled.article`
  margin-top: 3rem;
  h1 {
    ${sharedStyle.sharedStyleH2}
  }
  p {
    ${sharedStyle.sharedStyleP}
  }
  @media ${props => props.theme.breakpoints.tablet} {
  }
`
