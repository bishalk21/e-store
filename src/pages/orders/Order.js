import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { OrderTable } from "../../components/order-table/OrderTable";

const Order = () => {
  return (
    <AdminLayout>
      <h1 className="py-3">Order Mgmt.</h1>
      <hr />
      <OrderTable />
    </AdminLayout>
  );
};

export default Order;
