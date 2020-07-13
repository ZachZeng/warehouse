import styled from "styled-components"
import React from "react"

export const SearchbarWrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;

  .fa-search {
    color: ${props => props.theme.colors.light2};
  }
  input {
    font-size: 1.125rem;
    padding: 0 0 0.5rem 0rem;
    font-weight: 300;
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.light2};
    background: rgba(0, 0, 0, 0);
    border: none;

    border-bottom: 2px solid ${props => props.theme.colors.dark2};
    ::placeholder {
      color: ${props => props.theme.colors.light2};
      font-size: 1rem;
      transition: ${props => props.theme.animations.texts};
    }
    &:focus {
      outline: 0;
      caret-color: ${props => props.theme.colors.light2};
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
  @media ${props => props.theme.breakpoints.tablet} {
  }
`
