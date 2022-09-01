import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { AddProductForm } from "../../components/product-form/AddProductForm";

export const NewProduct = () => {
  return (
    <AdminLayout>
      <div className="mt-3 mb-3">
        <Link to="/product">
          <Button variant="primary">
            <i className="fas fa-arrow-left"> </i> Back{" "}
          </Button>{" "}
        </Link>{" "}
      </div>{" "}
      <h1> New Product </h1> <hr />
      <div className="product-list mt-5">
        <AddProductForm />
      </div>{" "}
    </AdminLayout>
  );
};
