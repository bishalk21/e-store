import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

export const RequestOtp = ({ handleOnOtpReq }) => {
  const emailRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnOtpReq(emailRef.current.value);
  };

  return (
    <Container>
      <div className="form">
        {/* request otp form */}
        <h2>Request OTP</h2>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>

            <Form.Control
              label="Email"
              type="email"
              name="email"
              required="true"
              placeholder="Enter email"
              ref={emailRef}
            />
          </Form.Group>
          <Form.Group className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Request OTP
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};
