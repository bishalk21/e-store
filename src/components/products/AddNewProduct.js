import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainLayout } from "../main-layout/MainLayout";
import { AddProductForm } from "./product-form-table/AddProductForm";

export const AddNewProduct = () => {
  return (
    <MainLayout>
      <Container>
        <div className="mt-3 mb-3">
          <Link to="/products">
            <Button variant="none">
              <i class="fa-solid fa-angle-left"></i> Back
            </Button>
          </Link>
        </div>
        <h1>Add New Product</h1>
        <hr />
        <div>
          <AddProductForm />
        </div>
      </Container>
    </MainLayout>
  );
};
