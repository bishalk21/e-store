import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container className="bg-dark py-4 text-light text-center">
      &copy; 2022 eStore - All rights reserved || Made with
      <span className="text-danger"> &hearts; </span>
      by{" "}
      <a href="" className="text-light">
        Bishal Karki{" "}
      </a>
    </Container>
  );
};
