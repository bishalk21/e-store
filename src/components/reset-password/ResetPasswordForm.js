import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { CustomInputField } from "../customInputField/CustomInputField";

export const ResetPasswordForm = ({ handleOnPasswordUpdate }) => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    setError("");
    //error boundry
    const { password } = form;
    console.log(password);
    if (name === "confirmPassword") {
      password !== value &&
        setError("password and confirm password must match");

      password.length < 6 &&
        setError("password must be longer than 6 charater");
      !/[a-z]/.test(password) &&
        setError("password must contain atleast one lowercase");
      !/[A-Z]/.test(password) &&
        setError("password must contain atleast one uppercase");
      !/[0-9]/.test(password) &&
        setError("password must contain atleast one number");

      !password && setError("password must be provide");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    handleOnPasswordUpdate(rest);
  };

  return (
    <div className="form">
      <h2>Reset New Password </h2>
      <hr />

      <Form onSubmit={handleOnSubmit}>
        <CustomInputField
          onChange={handleOnChange}
          label="OTP"
          name="otp"
          type="number"
          required={true}
          placeholder="check your email for otp"
        />
        <CustomInputField
          onChange={handleOnChange}
          label="Password"
          name="password"
          required={true}
          type="password"
          placeholder="*****"
        />
        <Form.Group className="py-3">
          <Form.Text>
            Note: Password must contain atleaset one number, lowercase,
            uppercase and must be longer than 6 character.
          </Form.Text>
        </Form.Group>
        <CustomInputField
          onChange={handleOnChange}
          label="Confirm Password"
          name="confirmPassword"
          required={true}
          type="password"
          placeholder="*****"
        />
        <Form.Group className="mb-3">
          {error && <Alert variant="danger">{error}</Alert>}
        </Form.Group>
        <Form.Group className="d-grid">
          <Button variant="warning" type="submit" disabled={error}>
            Update Password
          </Button>
        </Form.Group>
        <div className="text-end py-3">
          <a href="/reset-password">Request OTP</a>
        </div>
      </Form>
    </div>
  );
};
