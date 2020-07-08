import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div>
        <Nav style={{position:"fixed"}} vertical>
            <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
                <NavItem>
                  <NavLink href="/team">Team</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tags">Tags</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
        </Nav>
      </div>
    );
  }
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
