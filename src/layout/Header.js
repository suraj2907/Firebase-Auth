import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [toggle, setToggle] = useState(false);

  const toggler = () => setToggle(!toggle);
  return (
    <Navbar color="secondary" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          {" "}
          Github App{" "}
        </Link>
      </NavbarBrand>
      <NavbarText>{context.user?.email ? context.user.email : ""}</NavbarText>
      <NavbarToggler onClick={toggler} />
      <Collapse isOpen={toggle} navbar className="ms-2">
        <Nav className="ms-auto" justified>
          {context.user ? (
            <NavItem>
              <NavLink tag={Link} to="/" className="text-white">
                logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/" className="text-white">
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/" className="text-white">
                  Signin
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
