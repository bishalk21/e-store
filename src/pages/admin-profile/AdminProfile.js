import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { CustomInputField } from "../../components/customInputField/CustomInputField";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAdminPasswordAction,
  updateAdminProfileAction,
} from "../login/userAction";

const AdminProfile = () => {
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

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnProfileSubmit = (e) => {
    e.preventDefault();

    const { address, dob, fName, lName, phone, _id } = form;
    dispatch(
      updateAdminProfileAction({ address, dob, fName, lName, phone, _id })
    );
  };

  const handleOnPasswordUpdate = (e) => {
    const { newPassword } = password;
    const { name, value } = e.target;
    setError("");

    if (name === "confirmPassword") {
      newPassword !== value && setError("Password do not match");

      newPassword.length < 6 && setError("Password must be 6 character long!");
      !/[a-z]/.test(newPassword) &&
        setError("Must have atleaset 1 lower case character!");
      !/[A-Z]/.test(newPassword) &&
        setError("Must have atleaset 1 uppder case character!");
      !/[0-9]/.test(newPassword) &&
        setError("New password must have atleaset 1 number!");

      !newPassword && setError("Password field must be provide");
    }

    setPassword({ ...password, [name]: value });
  };

  const handleOnPasswordSubmit = (e) => {
    e.preventDefault();

    const { newPassword, confirmPassword } = password;

    if (!password.password || newPassword !== confirmPassword) {
      return alert(
        "Either current password field is empty or new password and confirm password do not match!"
      );
    }

    updateAdminPasswordAction({
      password: password.password,
      newPassword,
      _id: user._id,
    });
  };

  const inputFields = [
    {
      name: "fName",
      value: form.fName,
      label: "First Name",
      type: "text",
      placeholder: "Sam",
      //   required: true,
    },
    {
      name: "lName",
      value: form.lName,
      label: "Last Name",
      type: "text",
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
      type: "text",
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
    <AdminLayout>
      <div className="user-profile">
        <h2>Update your profile</h2>
        <hr />
        <Form onSubmit={handleOnProfileSubmit}>
          {inputFields.map((input, i) => (
            <CustomInputField {...input} onChange={handleOnProfileUpdate} />
          ))}
          <Button type="submit" variant="warning">
            Update Profile
          </Button>
        </Form>
      </div>
      <hr />
      <div className="mt-5 py-5">
        <h2>Update password</h2>
        <hr />
        <Form onSubmit={handleOnPasswordSubmit}>
          <CustomInputField
            onChange={handleOnPasswordUpdate}
            name="password"
            type="password"
            required={true}
            label="Current Password"
          />
          <CustomInputField
            onChange={handleOnPasswordUpdate}
            name="newPassword"
            type="password"
            required={true}
            label="New Password"
          />
          <Form.Group className="mb-3">
            <Form.Text>
              Password must contain lowercase, uppercase, number and atleast 6
              charater long
            </Form.Text>
          </Form.Group>

          <CustomInputField
            onChange={handleOnPasswordUpdate}
            name="confirmPassword"
            type="password"
            required={true}
            label="confirm Password"
          />

          {error && <Alert variant="danger">{error}</Alert>}

          <Button type="submit" variant="danger" disabled={error}>
            Update Password
          </Button>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default AdminProfile;
