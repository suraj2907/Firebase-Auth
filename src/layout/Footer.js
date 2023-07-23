import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-secondary p-3 fixed-bottom text-white text-uppercase"
    >
      <ul className="d-flex justify-content-between">
        <li className="list-group-item">&copy; copyright</li>
        <li className="list-group-item"> Suraj Jawrani</li>
        <li className="list-group-item">Suraj2907 github user name</li>
      </ul>
    </Container>
  );
};

export default Footer;
