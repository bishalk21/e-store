import React from "react";
import { Button } from "react-bootstrap";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { PaymentTableF } from "../../components/payment-table/PaymentTableF";

export const PaymentMethod = () => {
  return (
    <AdminLayout>
      <h4>Payment Method</h4>
      <div className="text-end">
        <Button variant="info">
          <i className="fa-solid fa-plus"></i> Add New Payment Method
        </Button>
      </div>
      <PaymentTableF />
    </AdminLayout>
  );
};
