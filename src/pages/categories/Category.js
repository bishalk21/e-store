import React from "react";
import { Container } from "react-bootstrap";
import { CategoryForm } from "../../components/category-form-table/category-form/CategoryForm";
import { CategoryTable } from "../../components/category-form-table/category-table/CategoryTable";
import { MainLayout } from "../../components/main-layout/MainLayout";

export const Category = () => {
  return (
    <MainLayout>
      <Container>
        <h2 className="py-3">Category Management</h2>

        {/* form */}
        <CategoryForm />

        {/* table */}
        <CategoryTable />
      </Container>
    </MainLayout>
  );
};
