import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CustomInoutFiedld } from "../../components/customInoutField/CustomInoutFiedld";
import { CustomModal } from "../../components/modal/modal";
import {
  postPaymentMethod,
  updatePayment,
} from "../payment-method/PaymentAction";

const initialState = {
  name: "",
  status: "",
  description: "",
};
export const EditPaymentM = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState); //form is an object

  const { setSelectedPaymentMethod } = useSelector(
    (state) => state.paymentMethod
  );

  useEffect(() => {
    setForm(setSelectedPaymentMethod);
  }, [setSelectedPaymentMethod]);

  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { createdAt, updatedAt, __v, ...rest } = form;
    // console.log(rest);
    dispatch(updatePayment(rest));
  };

  const inputFields = [
    {
      name: "name",
      label: "name",
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
      placeholder: "write Information about the payment method",
      value: form.description,
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
            checked={form.status === "active"}
          />{" "}
        </Form.Group>{" "}
        {inputFields.map((item) => (
          <CustomInoutFiedld
            key={item.name}
            {...item}
            onChange={handleOnChange}
          />
        ))}{" "}
        <Form.Group>
          <Button variant="success" type="submit">
            Update Payment Method{" "}
          </Button>{" "}
        </Form.Group>{" "}
      </Form>{" "}
    </CustomModal>
  );
};
