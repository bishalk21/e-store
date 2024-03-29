import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updatePaymentMethodAction } from "../../pages/payment-method/payment-method-action-slice/paymentMethodAction";
import { CustomInputField } from "../custom-input-field/customInputField";
import ContentModal from "../modal/contentModal";

const initialState = {
  status: "",
  name: "",
  description: "",
};

export const EditPaymentMethod = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  const { selectedEditPm } = useSelector((state) => state.paymentMethod);

  useEffect(() => {
    setForm(selectedEditPm);
  }, [selectedEditPm]);

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

    const { createdAt, __v, updatedAt, ...rest } = form;

    // dispatch(postPaymentMehodAction(form));
    dispatch(updatePaymentMethodAction(rest));
  };

  const inputField = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter Category Name",
      value: form.name,
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      required: true,
      placeholder: "Write information about the payment method",
      value: form.description,
    },
  ];

  return (
    <ContentModal title="Edit  Payment Method">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Check
            type="switch"
            name="status"
            label="Status"
            required
            checked={form.status === "active"}
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
            Update Payment Method
          </Button>
        </Form.Group>
      </Form>
    </ContentModal>
  );
};
