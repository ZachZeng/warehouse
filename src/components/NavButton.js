import React from "react"
import { NavButtonWrapper, NavButtonImg, NavButtonText } from "../elements"

export const NavButton = ({ children, href, icon, active }) => {
  return (
    <NavButtonWrapper to={href}>
      <NavButtonText active={active}>{children}</NavButtonText>
      <NavButtonImg src={icon} active={active} />
    </NavButtonWrapper>
  )
}
