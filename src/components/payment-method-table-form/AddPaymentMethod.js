import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postPaymentMehodAction } from "../../pages/payment-method/payment-method-action-slice/paymentMethodAction";
import { CustomInputField } from "../custom-input-field/customInputField";
import ContentModal from "../modal/contentModal";

const initialState = {
  status: "",
  name: "",
  description: "",
};

export const AddPaymentMethod = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);

    dispatch(postPaymentMehodAction(form));
  };

  const inputField = [
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
      placeholder: "Write information about the payment method",
    },
  ];

  return (
    <ContentModal title="Add New Payment Method">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Check
            type="switch"
            name="status"
            label="Status"
            required
            onChange={handleOnChange}
          ></Form.Check>
        </Form.Group>
        {inputField.map((item, i) => {
          return (
            <CustomInputField key={i} {...item} onChange={handleOnChange} />
          );
        })}

        <Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </ContentModal>
  );
};
