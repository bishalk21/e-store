import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CustomInputField } from "../../components/customInputField/CustomInputField";
import { AdminLayout } from "../../components/layout/AdminLayout";
import {
  updateAdminUserAction,
  updateAdminUserPasswordAction,
} from "../login/userAction";

export const AdminProfile = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [password, setPassword] = useState({});
  const [error, setError] = useState("");
  const { user } = useSelector((state) => state.admin);

  useEffect(() => {
    user?._id && setForm(user);
  }, [user]);

  const handleOnProfileUpdate = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnProfileSubmit = (e) => {
    e.preventDefault();
    const { address, dob, fName, lName, phone, _id } = form;
    dispatch(updateAdminUserAction({ address, dob, fName, lName, phone, _id }));
    // console.log(form);
  };

  const handleOnPasswordUpdate = (e) => {
    const { newPassword } = password;
    const { name, value } = e.target;
    console.log(value);
    setError("");

    if (name === "confirmPassword") {
      // newPassword !== confirmPassword
      newPassword !== value && setError("Password does not match");

      //length check
      newPassword.length < 6 &&
        setError("Password must be at least 6 characters long");

      // lowercase check
      !/[a-z]/.test(newPassword) &&
        setError("Password must contain a lowercase letter");

      // uppercase check
      !/[A-Z]/.test(newPassword) &&
        setError("Password must contain an uppercase letter");

      // number check
      !/[0-9]/.test(newPassword) && setError("Password must contain a number");

      !newPassword && setError("Please enter new password first");
    }

    setPassword({ ...password, [name]: value });
  };

  const handleOnPasswordSubmit = (e) => {
    e.preventDefault();
    const { newPassword, confirmPassword, oldPassword } = password;

    if (!oldPassword || newPassword !== confirmPassword)
      return alert("Either password or confirm password is empty");

    updateAdminUserPasswordAction({
      password: password.oldPassword,
      newPassword,
      _id: user._id,
    });
    // console.log(password);
  };

  const inputFields = [
    {
      label: "First Name",
      type: "text",
      name: "fName",
      value: form.fName,
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lName",
      value: form.lName,
      required: true,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      value: form.email,
      disabled: true,
      required: true,
    },
    {
      label: "Phone",
      type: "text",
      name: "phone",
      value: form.phone,
      required: true,
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      value: form.address,
    },
    {
      label: "DOB",
      type: "date",
      name: "dob",
      value: form.dob ? form.dob.slice(0, 10) : null,
    },
  ];
  return (
    <AdminLayout>
      <div className="admin-profile mt-5">
        <h2>Update your Profile</h2>
        <hr />
        <Form onSubmit={handleOnProfileSubmit}>
          {inputFields.map((input, i) => (
            <CustomInputField {...input} onChange={handleOnProfileUpdate} />
          ))}
          <Button variant="warning" type="submit">
            {" "}
            Update{" "}
          </Button>
        </Form>
      </div>
      {/* password */}
      <div className="mt-5 py-5">
        <h2>Change Password</h2>
        <hr />
        <Form onSubmit={handleOnPasswordSubmit}>
          <CustomInputField
            onChange={handleOnPasswordUpdate}
            label="Old Password"
            type="password"
            required={true}
            name="oldPassword"
          />
          <CustomInputField
            onChange={handleOnPasswordUpdate}
            label="New Password"
            type="password"
            name="newPassword"
            required={true}
          />
          <p>
            <small>
              Password must be at least 8 characters long, contain at least one
              number, one uppercase letter, one lowercase letter, and one
              special character.
            </small>
          </p>
          <CustomInputField
            onChange={handleOnPasswordUpdate}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            required={true}
          />
          {error && <Alert variant="danger">{error}</Alert>}
          <Button variant="danger" type="submit" disable={error}>
            {" "}
            Update{" "}
          </Button>
        </Form>
      </div>
    </AdminLayout>
  );
};
