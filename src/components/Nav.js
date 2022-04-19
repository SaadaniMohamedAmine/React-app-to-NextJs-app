import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

const Navs = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Link href="/">
          <a className="navbar-brand">My Website</a>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/about">
              <a href="/about" className="nav-link">
                About
              </a>
            </Link>
            <Link href="/users">
              <a className="nav-link">Random Users</a>
            </Link>
            <Link href="/users-plate">
              <a className="nav-link">Real Users</a>
            </Link>
            <Link href="/login">
              <a className="nav-link">Login</a>
            </Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
