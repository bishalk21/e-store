import React from "react";
import { AddCatForm } from "../../components/cat-form/AddCatForm";
import { CategoryTable } from "../../components/category-table/CategoryTable";
import { AdminLayout } from "../../components/layout/AdminLayout";

export const Category = () => {
  return (
    <AdminLayout>
      <h2 className="py-3">Categories Management</h2>

      <AddCatForm />

      <CategoryTable />
    </AdminLayout>
  );
};
