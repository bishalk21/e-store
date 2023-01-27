import React, { useState } from "react";
import { MainLayout } from "../../components/main-layout/MainLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert, Container } from "react-bootstrap";
import { CustomInputField } from "../../components/custom-input-field/customInputField";
import { postNewAdminUser } from "../../helpers/axiosHelper";
import { Link } from "react-router-dom";

export const AdminRegistration = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  // const [response, setResponse] = useState({
  //   status: "error",
  //   message: "Something went wrong"
  // });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);

    // not sending confirmPassword to the server
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("password do not match");
    }

    const result = await postNewAdminUser(rest);
    setResponse(result);
  };

  const fields = [
    {
      label: "First name",
      type: "text",
      placeholder: "Enter first name",
      name: "firstName",
      required: true,
    },
    {
      label: "Last name",
      type: "text",
      placeholder: "Enter last name",
      name: "lastName",
      required: true,
    },
    {
      label: "Email address",
      type: "email",
      placeholder: "Enter email",
      name: "email",
      required: true,
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
      required: true,
    },
    {
      label: "Phone",
      type: "number",
      placeholder: "Enter phone number",
      name: "phone",
    },
    {
      label: "Address",
      type: "text",
      placeholder: "Enter address",
      name: "address",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "**********",
      name: "password",
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "**********",
      name: "confirmPassword",
      required: true,
    },
  ];

  return (
    <>
      <MainLayout>
        <Container>
          <div className="mt-3">
            <Link
              to="/admin-users"
              className="text-decoration-none text-secondary"
            >
              &lt; Back
            </Link>
          </div>

          <div className="container">
            <div className="form">
              <Form onSubmit={handleOnSubmit}>
                <h1>New Admin Registration</h1>

                {response.message && (
                  <Alert
                    variant={
                      response.status === "success" ? "success" : "danger"
                    }
                  >
                    {response.message}
                  </Alert>
                )}

                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

<CustomInputField  />
<CustomInputField />
<CustomInputField /> */}
                {fields.map((field, index) => {
                  return (
                    <CustomInputField
                      key={index}
                      {...field}
                      onChange={handleOnChange}
                    />
                  );
                })}

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};
