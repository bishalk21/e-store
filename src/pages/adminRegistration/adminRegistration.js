import React, { useState } from "react";
import { Header } from "../../components/header/Header";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import { CustomInoutFiedld } from "../../components/customInoutField/CustomInoutFiedld";
import { postNewAdminUser } from "../../helper/axiosHelper";

export const AdminRegistration = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password and Confirm Password do not match");
    }
    const result = await postNewAdminUser(rest);
    setResponse(result);
    // console.log(form);
  };

  const fields = [
    // fields is an array of objects
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
      name: "phone",
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
          <Form onSubmit={handleOnSubmit}>
            <h1> Admin Registration </h1>{" "}
            {response.message && (
              <Alert
                variant={response.status === "success" ? "success" : "danger"}
              >
                {" "}
                {response.message}{" "}
              </Alert>
            )}{" "}
            <hr />{" "}
            {fields.map((item, i) => (
              <CustomInoutFiedld key={i} {...item} onChange={handleOnChange} />
              // key is used to identify each element and...item is used to pass all the properties of the item
            ))}{" "}
            <Button variant="primary" type="submit">
              Submit{" "}
            </Button>{" "}
          </Form>{" "}
        </div>{" "}
      </Container>

      <Footer />
    </div>
  );
};
