import React, { useState } from 'react'
import { MainLayout } from '../../components/MainLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInputField } from '../../components/customInputField';

export const AdminRegistration = () => {

  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  const fields = [
    {
      label: "First name",
      type: "text",
      placeholder: "Enter first name",
      name:"firstName",
      required: true,
    },
    {
      label: "Last name",
      type: "text",
      placeholder: "Enter last name",
      name:"lastName",
      required: true,
    },
    {
      label: "Email address",
      type: "email",
      placeholder: "Enter email",
      name:"email",
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
      name:"phone",
    },
    {
      label: "Address",
      type: "text",
      placeholder: "Enter address",
      name:"address",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "**********",
      name:"password",
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "**********",
      name:"confirmPassword",
      required: true,
    }
  ]

  return (
    <>
      <MainLayout>
        <div className="container">
        <div className="form">
      <Form onSubmit={handleOnSubmit} >
      <h1>New Admin Registration</h1>
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
{
  fields.map((field, index) => {
    return <CustomInputField key={index} {...field} onChange={handleOnChange} />
  })
}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
        </div>
      </MainLayout>
    </>
  )
}
