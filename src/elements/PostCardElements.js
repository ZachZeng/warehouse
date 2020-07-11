import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

export const PostCardWrapper = styled(props => <Link {...props} />)`
  display: grid;
  grid-template-columns: 10rem 4fr 2fr;
  background-color: ${props => props.theme.colors.dark2};
  width: 100%;
  padding: 0.8rem 1.7rem;
  transition: ${props => props.theme.animations.cards};

  & {
    text-decoration: none;
  }

  &:hover {
    z-index: 10;
    box-shadow: ${props => props.theme.shadows.shadow1};
    transform: scale(1.01, 1.01);
  }

  @media ${props => props.theme.breakpoints.mobile} {
    display: block;
    padding: 1rem 1.5rem;
    padding-bottom: 0.8rem;
    margin-bottom: 0.5rem;
  }
`

export const PostCardTime = styled.div`
  font-size: 1rem;
  font-weight: 300;
  margin: auto 0;
  color: ${props => props.theme.colors.light2};
  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0.8rem 0;
  }
`

export const PostCardTitle = styled.div`
  font-size: 1rem;
  font-weight: 300;
  margin: auto 0;
  color: ${props => props.theme.colors.light1};
  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0.8rem 0;
  }
`

export const PostCardTags = styled.div`
  display: flex;
  align-item: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0.8rem 0;
  }
`

export const PostCardTag = styled(props => <Link {...props} />)`
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0.2rem 0.4rem;
  background-color: rgba(0, 0, 0, 0);
  color: ${props => {
    switch (props.tag) {
      case "code":
        return "#64C4ED"
      case "game":
        return "#FF5858"
      case "design":
        return "#FFD058"
      default:
        return props.theme.colors.light1
    }
  }};

  border: 1px solid ${props => props.theme.colors.light1};
  border-radius: 0.2rem;
  margin: 0.25rem;
  border-color: ${props => {
    switch (props.tag) {
      case "code":
        return "#64C4ED"
      case "game":
        return "#FF5858"
      case "design":
        return "#FFD058"
      default:
        return props.theme.colors.light1
    }
  }};
  transition: ${props => props.theme.animations.cards};

  &:hover {
    color: ${props => {
      switch (props.tag) {
        case "code":
          return props.theme.colors.light1
        case "game":
          return props.theme.colors.light1
        case "design":
          return props.theme.colors.dark1
        default:
          return props.theme.colors.dark1
      }
    }};
    background-color: ${props => {
      switch (props.tag) {
        case "code":
          return "#64C4ED"
        case "game":
          return "#FF5858"
        case "design":
          return "#FFD058"
        default:
          return props.theme.colors.light1
      }
    }};
  }
`
