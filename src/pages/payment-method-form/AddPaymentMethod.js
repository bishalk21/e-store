import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CustomInoutFiedld } from "../../components/customInoutField/CustomInoutFiedld";
import { CustomModal } from "../../components/modal/modal";
import { postPaymentMethod } from "../payment-method/PaymentAction";

const initialState = {
  name: "",
  status: "",
  description: "",
};
export const AddPaymentMethod = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState); //form is an object

  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "status") {
      value = checked ? "Active" : "Inactive";
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    dispatch(postPaymentMethod(form));
  };

  const inputFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter Category Name",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      required: true,
      placeholder: "write Information about the payment method",
    },
  ];
  return (
    <CustomModal>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Check
            type="switch"
            label="Active"
            name="status"
            onChange={handleOnChange}
          />
        </Form.Group>
        {inputFields.map((item) => (
          <CustomInoutFiedld
            key={item.name}
            {...item}
            onChange={handleOnChange}
          />
        ))}

        <Form.Group>
          <Button variant="success" type="submit">
            Add Payment Method
          </Button>
        </Form.Group>
      </Form>
    </CustomModal>
  );
};
