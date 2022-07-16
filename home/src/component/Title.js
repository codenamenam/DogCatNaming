/* eslint-disable */

import React from "react";
import "../App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Title = () => {
  return (
    <Navbar className="bg-nav" expand="xl" variant="light">
      <Container>
        <Navbar.Brand href="#">
          <img
            alt=""
            src="https://w7.pngwing.com/pngs/247/911/png-transparent-dog-grooming-cat-puppy-pet-adoption-dog-animals-pet-dog-like-mammal.png"
            width="50"
            height="50"
            className="d-inline-block"
          />{" "}
          반려동물 이름짓기
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">이름짓기</Nav.Link>
            <Nav.Link href="#link">통계</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Title;
