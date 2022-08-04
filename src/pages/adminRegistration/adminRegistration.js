import React from "react";
import { Header } from "../../components/header/Header";
import { Button, Container, Form } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import { CustomInoutFiedld } from "../../components/customInoutField/CustomInoutFiedld";

export const AdminRegistration = () => {
  const fields = [
    {
      label: "First Name *",
      type: "text",
      name: "fName",
      placeholder: "Enter First Name",
      required: true,
    },
    {
      label: "Last Name *",
      type: "text",
      name: "lName",
      placeholder: "Enter Last Name",
      required: true,
    },
    {
      label: "Email *",
      type: "email",
      name: "email",
      placeholder: "Enter Email",
      required: true,
    },
    {
      label: "phone",
      type: "text",
      name: "number",
      placeholder: "Enter Phone",
    },
    {
      label: "DOB",
      type: "date",
      name: "dob",
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      placeholder: "Enter Address",
    },
    {
      label: "Password *",
      type: "password",
      name: "password",
      placeholder: "Enter Password",
      required: true,
    },
    {
      label: "Confirm Password *",
      type: "password",
      name: "confirmPassword",
      placeholder: "Enter Confirm Password",
      required: true,
    },
  ];

  return (
    <div>
      <Header />
      <Container className="page-min">
        <div className="form">
          <Form>
            <h1>Admin Registration</h1>
            <hr />
            {fields.map((item, i) => (
              <CustomInoutFiedld key={i} {...item} />
            ))}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
