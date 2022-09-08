import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { OrderTable } from "../../components/order-table/OrderTable";
export const OrderPage = () => {
  return (
    <div>
      <AdminLayout>
        <h1 className="py-3">Orders Management</h1>
        <hr />
        <OrderTable />
      </AdminLayout>
    </div>
  );
};
