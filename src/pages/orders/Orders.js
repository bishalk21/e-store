import React from "react";
import { Container } from "react-bootstrap";
import { MainLayout } from "../../components/main-layout/MainLayout";
import { OrderTable } from "../../components/orders/OrderTable";

export const Orders = () => {
  return (
    <MainLayout>
      <Container>
        <h1 className="py-3">Orders</h1>
        <hr />
        {/* orderTable */}
        <OrderTable />
      </Container>
    </MainLayout>
  );
};
