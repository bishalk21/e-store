import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { ProductTable } from "../../components/product-table/ProductTable";

export const Product = () => {
  return (
    <AdminLayout>
      <h1>Products</h1>

      <div className="text-end">
        <Link to="/product/new">
          <Button variant="primary">
            <i className="fas fa-plus"></i> New Product
          </Button>
        </Link>
        <hr />
        <div className="product-list mt-5">
          <ProductTable />
        </div>
      </div>
    </AdminLayout>
  );
};
