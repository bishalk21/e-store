import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  deleteProductAction,
  getSingleProductAction,
} from "../../pages/products/product-slice-action/productAction";
import { MainLayout } from "../main-layout/MainLayout";

export const EditProduct = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  const { selectedProduct } = useSelector((state) => state.products);

  useEffect(() => {
    _id && dispatch(getSingleProductAction(_id));
  }, [_id, dispatch]);

  const handleOnDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const { thumbnail, images } = selectedProduct;
      const imgs = [thumbnail, ...images];

      deleteProductAction(_id, [...new Set(imgs)]);
    }
  };

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
        <h1>Update Product</h1>
        <hr />
        <div className="edit-form">Edit Form Goes here</div>
        <div className="text-end py-3">
          <Button variant="danger" onClick={handleOnDelete}>
            Delete Product
          </Button>
        </div>
      </Container>
    </MainLayout>
  );
};
