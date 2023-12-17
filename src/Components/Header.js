import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    color: "#fff",
  };
  const [expanded, setExpanded] = useState(false);
  return (
    
    <div className="header">
      <Navbar expanded={expanded} expand="lg" fixed="top" >
        <Container>
          <Navbar.Brand style={{fontSize:"smaller"}}>Shobhit Singh</Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/About"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/Hobby"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Hobby
              </NavLink>
              <NavLink
                to="/Contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
