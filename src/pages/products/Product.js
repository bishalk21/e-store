import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainLayout } from "../../components/main-layout/MainLayout";
import { ProductTable } from "../../components/products/product-form-table/productTable";

export const Product = () => {
  return (
    <MainLayout>
      <Container>
        <h1>Product</h1>
        <div className="text-end">
          <Link to="/product/new">
            <Button variant="primary">
              <i className="fa fa-plus"></i> Add New Product
            </Button>
          </Link>
          <hr />
        </div>
        <div className="product-list">
          <ProductTable />
        </div>
      </Container>
    </MainLayout>
  );
};
