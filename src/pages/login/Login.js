import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInoutFiedld } from "../../components/customInoutField/CustomInoutFiedld";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

export const LoginPage = ({ label, rest }) => {
  return (
    <div>
      {" "}
      <Header />
      <Container className="page-min">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <CustomInoutFiedld />
          <CustomInoutFiedld />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};
