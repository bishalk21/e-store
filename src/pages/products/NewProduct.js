import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AdminLayout } from "../../components/layout/AdminLayout";

export const NewProduct = () => {
  return (
    <AdminLayout>
      <div className="mt-3 mb-3">
        <Link to="/product">
          <Button variant="primary">
            <i className="fas fa-arrow-left"></i> Back
          </Button>
        </Link>
      </div>
      <h1>New Product</h1>
      <hr />
      <div className="product-list mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
