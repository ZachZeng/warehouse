import styled from "styled-components"

export const LayoutWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas: "nav content";
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto;
  grid-gap: 0;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 5rem auto;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 5rem auto;
  }
`
