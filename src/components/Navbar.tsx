import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComp = () => {
  return (
    <Navbar bg="warning" expand="sm">
    <Container>
      <Navbar.Brand href="/">React-TS Core</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="tour">Tours</Nav.Link>
          <Nav.Link href="/menu">Menus</Nav.Link>
          <NavDropdown title="TS" id="basic-nav-dropdown">
            <NavDropdown.Item href="/tour">Tour</NavDropdown.Item>
            <NavDropdown.Item href="/menu">Menus</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="JS" id="basic-nav-dropdown">
            <NavDropdown.Item href="/404">Javascript core </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComp