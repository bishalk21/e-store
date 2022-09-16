import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const RequestOTP = ({ handleOnOtpRequest }) => {
  const emailRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnOtpRequest(emailRef.current.value);
  };

  return (
    <Container>
      <div className="form">
        <h2>Request OTP</h2>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email </Form.Label>
            <Form.Control
              ref={emailRef}
              label="Email"
              name="email"
              type="email"
              placholder="your@email.com"
              required="true"
            />
          </Form.Group>

          <Form.Group className="d-grid gap-2">
            <Button variant="primary" type="sumbit">
              Request OTP
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};
