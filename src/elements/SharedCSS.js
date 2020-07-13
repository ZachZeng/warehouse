import { css } from "styled-components"

export const sharedStyleP = css`
  margin: ${props => (props.margin ? props.margin : "0 0 1.5rem")};
  font-size: 1rem;
  letter-spacing: 0.02rem;

  line-height: 1.5rem;

  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};

  font-weight: 300;

  color: ${props => props.theme.colors.light1};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`
export const sharedStyleTitle = css`
  font-size: 3.125rem;
  line-height: 3.25rem;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.light1
    }
  }};
  font-weight: 800;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};

  margin: ${props => (props.margin ? props.margin : "0 0 2rem 0")};
`

export const sharedStyleH1 = css`
  font-size: 2.5rem;
  line-height: 3.25rem;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.light1
    }
  }};
  font-weight: 800;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};

  margin: ${props => (props.margin ? props.margin : "0 0 2rem 0")};
`

export const sharedStyleSUBTITLE = css`
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark3
    }
  }};
  font-weight: 300;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};

  margin: ${props => (props.margin ? props.margin : "1rem 0")};
`

export const sharedStyleH2 = css`
  font-size: 2.25rem;
  line-height: 3rem;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.light1
    }
  }};
  font-weight: 700;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : "2rem 0")};
`
