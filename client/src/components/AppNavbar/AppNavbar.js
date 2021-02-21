import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink>
                    <Link to="/">Home</Link>     
                </NavLink>             
            </NavItem>          
            <NavItem>
                <NavLink>
                    <Link to="/my_cities">My Cities</Link>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                    <Link to="/add_city">Add City</Link>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/login">Login</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;