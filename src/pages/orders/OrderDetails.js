import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainLayout } from "../../components/main-layout/MainLayout";
import { OrderEditForm } from "../../components/orders/OrderEditForm";

export const OrderDetails = () => {
  return (
    <MainLayout>
      <Container>
        <div className="mt-3">
          <Link to="/orders" className="text-decoration-none text-secondary">
            &lt; Back
          </Link>
        </div>
        <h1 className="py-3">Order Details</h1>
        <hr />

        <OrderEditForm />
      </Container>
    </MainLayout>
  );
};
