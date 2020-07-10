import styled from "styled-components"

export const LayoutWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: "nav content";
  grid-template-columns: 1fr 3.5fr;
  grid-template-rows: auto;
  grid-gap: 0;
  overflow: hidden;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 5rem auto;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 5rem auto;
  }
`
