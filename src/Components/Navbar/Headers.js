import React from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import carouselItem from "../../courseSlider.png";

const Headers = () => {
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center navbarCenter">
              <Link to="/">Home</Link>
              <Link to="about">About</Link>
              <Nav.Link href="#course">Course</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav className="loginRight">
              <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="home" className="justify-content-center slider">
        <div className="container">
          <Row>
            <Col>
              <div className="slider-png">
                <img
                  className="d-block w-100"
                  src={carouselItem}
                  alt="First slide"
                />
              </div>
            </Col>
            <Col>
              <h1> Welcome to our website</h1>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Headers;
