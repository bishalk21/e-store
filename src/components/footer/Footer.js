import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container className="bg-dark py-5 text-light text-center">
      &copy: copyright all rights reserved 2022 || Made with{" "}
      <i className="fas fa-heart"></i> by{" "}
      <a href="" className="text-light">
        Bishal Karki
      </a>
    </Container>
  );
};
