import React from "react";
import { Link } from "react-router-dom";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { OrderEditForm } from "../../components/order-edit/OrderEditForm";

const OrderDetails = () => {
  return (
    <AdminLayout>
      <div className="mt-3">
        <Link to="/orders" className="text-decoration-none text-secondary">
          &lt; Back
        </Link>
      </div>

      <h1 className="py-3">Order Details</h1>
      <hr />
      <OrderEditForm />
    </AdminLayout>
  );
};

export default OrderDetails;
