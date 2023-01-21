import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { CustomInputField } from "../custom-input-field/customInputField";

export const ResetPassword = ({ handleOnPasswordReset }) => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // error boundary
    setError("");
    const { password } = form;

    // 1. no password
    if (name === "confirmPassword") {
      // 2. password - 6 character
      password.length < 6 &&
        setError("Password field must be 6 characters long");
      // 3. password - one lowercase
      ![/a-z/].test(password) &&
        setError("Password field must be one lowercase");
      // 4. password - one uppercase
      ![/A-Z/].test(password) &&
        setError("Password field must be one uppercase");
      // 5. password - one number
      ![/0-9/].test(password) && setError("Password field must be one number");
      // 6. password matches with confirm password
      password !== value &&
        setError("Password field must match with confirm password");

      !password && setError("Empty Password field");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnPasswordReset(form);
  };

  return (
    <div className="form">
      <h2>Reset New Password</h2>
      <hr />

      <Form onSubmit={handleOnSubmit}>
        <CustomInputField
          onChange={handleOnChange}
          label="OTP"
          placeholder="098776"
          name="otp"
          required
        />
        <CustomInputField
          onChange={handleOnChange}
          label="New Password"
          placeholder="********"
          name="password"
          type="password"
          required
        />
        <Form.Text>
          Note: Password must contain at least one number, lowercase letter,
          uppercase letter and 6 characters long.
        </Form.Text>
        <CustomInputField
          onChange={handleOnChange}
          label="Confirm Password"
          placeholder="********"
          name="confirmPassword"
          type="password"
          required
        />

        <Form.Group className="mb-3">
          {error && <Alert variant="danger">{error}</Alert>}
        </Form.Group>

        <Form.Group className="d-grid gap-2">
          <Button variant="warning" type="submit" disabled={error}>
            Update Password
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
