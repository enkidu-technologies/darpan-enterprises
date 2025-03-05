import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/DE.png'
// import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="header bg-white shadow">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" style={{width: "50px"}}/>
          Darpan Enterprises
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/#top">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
