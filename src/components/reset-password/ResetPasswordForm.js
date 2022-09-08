import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInputField } from "../customInputField/CustomInputField";

export const ResetPasswordForm = ({ handleOnPasswordUpdate }) => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");

    const { password } = form;
    if (name === "confirmPassword") {
      // password and confirm password must match
      password !== value &&
        setError("Password and confirm password must match");

      // password must be at least 8 characters long
      password.length < 8 && setError("Password must be at least 8 characters");

      // password must contain at least one lowercase letter
      !/[a-z]/.test(password) && setError("Password must contain a lowercase");

      // password must contain at least one uppercase letter
      !/[A-Z]/.test(password) && setError("Password must contain an uppercase");

      // password must contain at least one number
      !/[0-9]/.test(password) && setError("Password must contain a number");

      // password must be provided
      !password && setError("Password is required");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnPasswordUpdate(form);
  };
  return (
    <div>
      <div className="form">
        <h2>Verify OTP</h2>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <CustomInputField
            onChange={handleOnChange}
            label="OTP"
            name="OTP"
            type="number"
            required={true}
            placeholder="Enter OTP"
          />
          <CustomInputField
            onChange={handleOnChange}
            label="New Password"
            name="password"
            type="password"
            placeholder="Enter New Password"
            required={true}
          />
          <Form.Group>
            <Form.Text className="text-muted">
              Note: Password must be at least 8 characters long, contain at
              least one number, one uppercase and one lowercase letter.
            </Form.Text>
          </Form.Group>
          <CustomInputField
            onChange={handleOnChange}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
          {/* error */}
          <Form.Group>
            {error && <Form.Text className="text-danger">{error}</Form.Text>}
          </Form.Group>
          <Form.Group className="d-grid gap-2">
            <Button variant="primary" type="submit" disabled={error}>
              Update Password
            </Button>
          </Form.Group>
        </Form>
        {/* Button */}
      </div>
    </div>
  );
};
