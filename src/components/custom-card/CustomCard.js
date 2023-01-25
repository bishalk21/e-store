import React from "react";
import { Card } from "react-bootstrap";
import "./customCard.styles.css";

export const CustomCard = ({ title, text }) => {
  return (
    <>
      <Card style={{ minWidth: "18rem" }}>
        <Card.Body className="py-3 text-light">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="fw-bolder fs-1">{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
