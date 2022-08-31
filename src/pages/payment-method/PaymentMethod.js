import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { PaymentTableF } from "../../components/payment-table/PaymentTableF";
import { AddPaymentMethod } from "../payment-method-form/AddPaymentMethod";
import { setModalShow } from "../system-st/SystemSlice";

export const PaymentMethod = () => {
  const dispatch = useDispatch();
  const handleOnAddPM = () => {
    dispatch(setModalShow());
  };
  return (
    <AdminLayout>
      <h4 className="py-4">Payment Method</h4>
      <hr />
      <AddPaymentMethod />
      <div className="text-end py-3">
        <Button variant="primary" onClick={handleOnAddPM}>
          <i className="fa-solid fa-plus"></i> Add New Payment Method
        </Button>
      </div>
      <PaymentTableF />
    </AdminLayout>
  );
};
