import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export const ProjectCardWrapper = styled(props => <Link {...props} />)`
  width: 15rem;
  height: 25rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 1rem;
  text-decoration: none;
  box-shadow: ${props => props.theme.shadows.projectShadow};
  background-color: ${props => props.theme.colors.dark2};
  transition: ${props => props.theme.animations.cards};

  &:hover {
    box-shadow: ${props => props.theme.shadows.shadow1};
    transform: translateY(-0.3rem);
  }

  @media ${props => props.theme.breakpoints.mobile} {
    display: block;
  }
`

export const ProjectCardImage = styled(props => <Img {...props} />)`
  height: 13rem;
  flex: 0 0 50%;
  border-radius: 1rem;
  @media ${props => props.theme.breakpoints.tablet} {
  }
`

export const ProjectCardTitle = styled.div`
  text-align: left;
  font-size: 1.125rem;
  text-decoration: none;
  font-weight: 700;
  margin: 1.8rem 0;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.light1};

  @media ${props => props.theme.breakpoints.tablet} {
  }
`

export const ProjectCardTime = styled.div`
  text-align: left;
  font-size: 0.8rem;
  text-decoration: none;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.light2};
  @media ${props => props.theme.breakpoints.tablet} {
  }
`

export const ProjectCardBody = styled.div`
  display: -webkit-box;
  text-align: left;
  font-weight: 300;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${props => props.theme.colors.light2};
  @media ${props => props.theme.breakpoints.tablet} {
  }
`
