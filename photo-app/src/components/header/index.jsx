import React from "react";
import { Container, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__titile"
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
              className="header__link"
              activeClassName="header__link--active"
              to="/"
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
