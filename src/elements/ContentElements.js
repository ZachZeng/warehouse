import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-area: content;
  overflow-y: scroll;
  padding: 4rem;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 3rem;
  }
`
