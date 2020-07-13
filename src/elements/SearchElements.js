import styled from "styled-components"
import React from "react"

export const SearchbarWrapper = styled(props => <input {...props} />)`
  font-size: 1.125rem;
  padding: 0 0 0.5rem 0rem;
  color: ${props => props.theme.colors.light2};
  background: rgba(0, 0, 0, 0);
  border: none;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${props => props.theme.colors.dark2};
  ::placeholder {
    color: ${props => props.theme.colors.light2};
    transition: ${props => props.theme.animations.cards};
  }
  &:focus {
    outline: 0;
    caret-color: ${props => props.theme.colors.light2};
  }
  &:focus::placeholder {
    color: transparent;
  }
  @media ${props => props.theme.breakpoints.tablet} {
  }
`
