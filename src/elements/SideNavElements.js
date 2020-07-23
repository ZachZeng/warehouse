import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"

export const SideNavWrapper = styled.header`
  grid-area: nav;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  padding-top: 5rem;
  overflow: hidden;
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

export const NavButtonWrapper = styled(props => <Link {...props} />)`
  padding: 1.5rem 0rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  overflow: auto;
  max-width: 13rem;
  text-decoration: none;

  @media ${props => props.theme.breakpoints.tablet} {
    display: block;
  }
`

export const NavButtonText = styled.p`
  color: ${props =>
    props.active ? props.theme.colors.light1 : props.theme.colors.dark3};
  font-size: 1.25rem;
  text-decoration: none;
  transition: ${props => props.theme.animations.nav};

  ${NavButtonWrapper}:hover & {
    color: ${props => props.theme.colors.light1};
  }

  ${NavButtonWrapper}:focus & {
    color: ${props => props.theme.colors.light1};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: none;
  }
`

export const NavButtonImg = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  background-color: ${props =>
    props.active ? props.theme.colors.light1 : props.theme.colors.dark3};
  -webkit-mask: url(${props => props.src}) no-repeat center;
  mask: url(${props => props.src}) no-repeat center;
  mask-size: 100%;
  transition: ${props => props.theme.animations.nav};

  ${NavButtonWrapper}:hover & {
    background-color: ${props => props.theme.colors.light1};
  }

  ${NavButtonWrapper}:focus & {
    background-color: ${props => props.theme.colors.light1};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    margin: 0 auto;
  }
`
