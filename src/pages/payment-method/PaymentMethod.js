import React from "react";
import { Button, Container } from "react-bootstrap";
import { MainLayout } from "../../components/main-layout/MainLayout";
import { PaymentMethodTable } from "../../components/payment-method-table-form/PaymentMethodTable";

export const PaymentMethod = () => {
  return (
    <MainLayout>
      <Container>
        <h1 className="py-4">Payment Method</h1>
        <hr />

        <div className="text-end py-4">
          <Button className="btn btn-primary">
            <i className="fa-solid fa-plus"></i> Add New Payment Method
          </Button>
        </div>

        <PaymentMethodTable />
      </Container>
    </MainLayout>
  );
};
