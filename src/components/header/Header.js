import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="md">
        <Container>
          <div>
            <i class="fa-solid fa-bars"></i>
            <Navbar.Brand href="/"> eStore </Navbar.Brand>{" "}
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                {" "}
                Login{" "}
              </Link>{" "}
              <Link className="nav-link" to="/register">
                {" "}
                Register{" "}
              </Link>{" "}
            </Nav>{" "}
          </Navbar.Collapse>{" "}
        </Container>{" "}
      </Navbar>{" "}
    </div>
  );
};
