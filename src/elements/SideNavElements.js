import styled from "styled-components"

export const SideNavWrapper = styled.header`
  grid-area: nav;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  overflow: auto;
  border-right: 2px solid ${props => props.theme.colors.dark2};

  .NavButtons {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 1rem;
    .logo {
      display: none;
    }
  }
`
