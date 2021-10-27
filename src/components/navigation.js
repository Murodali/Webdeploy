import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../css/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <div className="container">
        <Navbar.Brand href="/" className="nav-brand p-3 text-left ml-25">
          <h1 className="logo-letter">M</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto"></Nav>
          <Nav className="ms-auto links">
            <Nav.Link href="#mywork">My Work</Nav.Link>
            <Nav.Link href="#myskills">My skills</Nav.Link>
            <Nav.Link href="#contact">Hire me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
