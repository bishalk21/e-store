import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MainLayout } from "../../components/main-layout/MainLayout";
// import { AddPaymentMethod } from "../../components/payment-method-table-form/AddPaymentMethod";
import { PaymentMethodTable } from "../../components/payment-method-table-form/PaymentMethodTable";
import { setModalShow } from "../system-state/systemStateSlice";

export const PaymentMethod = () => {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState("");

  const handleOnAddPM = (str) => {
    dispatch(setModalShow());
    setShowForm(str);
  };

  return (
    <MainLayout>
      <Container>
        <h1 className="py-4">Payment Method</h1>
        <hr />

        {/* <AddPaymentMethod /> */}

        <div className="text-end py-4">
          <Button
            className="btn btn-primary"
            onClick={() => handleOnAddPM("add")}
          >
            <i className="fa-solid fa-plus"></i> Add New Payment Method
          </Button>
        </div>

        <PaymentMethodTable showForm={showForm} handleOnAddPM={handleOnAddPM} />
      </Container>
    </MainLayout>
  );
};
