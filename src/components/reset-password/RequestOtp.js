import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInputField } from "../customInputField/CustomInputField";

export const RequestOtp = () => {
  const emailRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (email) {
      console.log(email);
    }
  };

  return (
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
  );
};
