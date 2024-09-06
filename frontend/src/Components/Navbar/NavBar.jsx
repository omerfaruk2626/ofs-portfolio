import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

function HeaderNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" className="logo">O<span className="text-danger">F</span>S</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
        <Nav.Link as={NavLink} to="/technologies">Technologies</Nav.Link>
        <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default HeaderNavbar;
