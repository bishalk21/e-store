import React from "react";
import { Card } from "react-bootstrap";
import "./customCard.style.css";

export const CustomCard = ({ count, title }) => {
  return (
    <div>
      <Card style={{ minWidth: "18rem" }}>
        <Card.Body className="d-flex flex-column justify-content-between align-items-center flex-wrap">
          <Card.Title>{count}</Card.Title>
          <Card.Text>{title}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
