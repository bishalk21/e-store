import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CustomInputField } from "../../components/custom-input-field/customInputField";
import { MainLayout } from "../../components/main-layout/MainLayout";
import {
  updateAdminUserPasswordAction,
  updateAdminUserProfileAction,
} from "../admin-login/admin-reducer-action/adminUserAction";

export const AdminProfile = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [password, setPassword] = useState({});

  // error
  const [error, setError] = useState("");

  const { adminUsers } = useSelector((state) => state.adminUser);

  useEffect(() => {
    adminUsers?._id && setForm(adminUsers);
  }, [adminUsers]);

  const handleOnProfileUpdate = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnProfileUpdateSubmit = (e) => {
    e.preventDefault();
    // console.log(form);

    const { address, dob, firstName, lastName, phone, _id } = form;
    dispatch(
      updateAdminUserProfileAction({
        address,
        dob,
        firstName,
        lastName,
        phone,
        _id,
      })
    );
  };

  const handleOnPasswordUpdate = (e) => {
    const { newPassword } = password;
    const { name, value } = e.target;

    setError("");

    // password validation

    // If empty new password
    if (name === "confirmPassword") {
      // password match
      newPassword !== value && setError("Password do not match!");

      // length - > 8
      newPassword.length < 7 &&
        setError("Password Length must be 8 character long or more!");

      // lowercase - 1
      !/[a-z]/.test(newPassword) &&
        setError("Password must contain at least one lowercase!");

      // uppercase - 1
      !/[A-z]/.test(newPassword) &&
        setError("Password must contain at least one uppercase!");

      // number - 1
      !/[0-9]/.test(newPassword) &&
        setError("Password must contain at least one number!");

      !newPassword && setError("Password field must be provided");
    }

    setPassword({ ...password, [name]: value });
  };

  const handleOnUpdatePasswordSubmit = (e) => {
    e.preventDefault();

    // console.log(password);
    const { confirmPassword, newPassword } = password;

    if (!password.password || newPassword !== confirmPassword) {
      return alert(
        "Either current password field is empty or new password and confirm password do not match"
      );
    }

    updateAdminUserPasswordAction({
      password: password.password,
      newPassword,
      _id: adminUsers._id,
    });
  };

  const inputFields = [
    {
      name: "firstName",
      value: form.firstName,
      label: "First Name",
      type: "text",
      placeholder: "First Name",
      required: true,
    },
    {
      name: "lastName",
      value: form.lastName,
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
      required: true,
    },
    {
      name: "email",
      value: form.email,
      label: "Email",
      type: "email",
      disabled: true,
      required: true,
    },
    {
      name: "phone",
      value: form.phone,
      label: "Phone",
      type: "number",
      required: true,
    },
    {
      name: "address",
      value: form.address,
      label: "Address",
      type: "text",
    },
    {
      name: "dob",
      value: form.dob ? form.dob.slice(0, 10) : null,
      label: "DOB",
      type: "date",
    },
  ];

  return (
    <MainLayout>
      <Container>
        <div className="user-profile mb-3">
          <h2>Update your Profile</h2>

          <hr />

          <Form onSubmit={handleOnProfileUpdateSubmit}>
            {inputFields.map((input, i) => (
              <CustomInputField
                key={i}
                {...input}
                onChange={handleOnProfileUpdate}
              />
            ))}

            <Button variant="warning" type="submit">
              Update Profile
            </Button>
          </Form>
        </div>

        <hr />

        <div className="mt-5 py-5">
          <h2>Update Password</h2>
          <hr />

          <Form onSubmit={handleOnUpdatePasswordSubmit}>
            <CustomInputField
              onChange={handleOnPasswordUpdate}
              type="password"
              required={true}
              name="password"
              label="Password"
            />

            <CustomInputField
              onChange={handleOnPasswordUpdate}
              type="password"
              required={true}
              name="newPassword"
              label="New Password"
            />

            <Form.Group className="mb-3">
              <small>
                Password must contain lowercase, uppercase, number and at least
                8 characters!
              </small>
            </Form.Group>

            <CustomInputField
              onChange={handleOnPasswordUpdate}
              type="password"
              required={true}
              name="confirmPassword"
              label="Confirm Password"
            />

            {error && <Alert variant="danger">{error}</Alert>}

            <Button type="submit" variant="danger" disabled={error}>
              Update Password
            </Button>
          </Form>
        </div>
      </Container>
    </MainLayout>
  );
};
