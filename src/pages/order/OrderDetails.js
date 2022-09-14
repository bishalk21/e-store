import React from "react";
import { Link } from "react-router-dom";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { OrderEditForm } from "../../components/order-edit/OrderEditForm";
export const OrderDetails = () => {
  return (
    <div>
      <AdminLayout>
        <h1 className="mt-3">
          <Link to="/orders" className="btn btn-primary text-decoration-none">
            <i className="fas fa-arrow-left"></i> Go Back
          </Link>
        </h1>
        <h1 className="py-3">Orders Details</h1>
        <hr />

        <div className="">
          <OrderEditForm />
        </div>
      </AdminLayout>
    </div>
  );
};
