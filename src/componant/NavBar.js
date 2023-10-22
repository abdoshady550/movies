import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="nav-style ">
      <Container className="">
        <Row className="nav-align">
          <Col lg="2">
            <div className="fs-1  name-logo">Cinema-TV </div>
          </Col>
          <Col lg="2">
            <img className="logo" src="/img/l1.png " alt="logo" />
          </Col>
          <Col lg="8">
            <div className=" search">
            <input type="text"  placeholder="     Search..." />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
