import styled from "styled-components"
import "./TypographyElements"
import * as sharedStyle from "./SharedCSS"

export const ArticleWrapper = styled.article`
  margin-top: 3rem;

  & {
    color: ${props => props.theme.colors.light1};
  }

  h1 {
    ${sharedStyle.sharedStyleH2}
  }

  h2 {
    ${sharedStyle.sharedStyleH3}
  }
  p {
    ${sharedStyle.sharedStyleP}
  }

  ul,
  ol {
    ${sharedStyle.sharedStyleList}
  }

  h3 {
    ${sharedStyle.sharedStyleH4}
  }

  h4 {
    ${sharedStyle.sharedStyleH5}
  }
  @media ${props => props.theme.breakpoints.tablet} {
  }
`
