import React from "react";
import { Container, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="content">
          <Col xs="auto">
            <a
              className="header_link"
              href="https://vtiacademy.edu.vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VTI Academy
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact="true"
              className="header_link"
              activeClassName="header_link_active"
              to="/photos"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
export default Header;
