import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { deleteProductAction, getSingleProductAction } from "./ProductAction";

export const EditProduct = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  const { selectedProduct } = useSelector((state) => state.product);

  useEffect(() => {
    _id && dispatch(getSingleProductAction(_id));
  }, [_id, dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure?")) {
      const { thumbnail, images } = selectedProduct;
      const imgs = [thumbnail, ...images];
      // console.log([thumbnail, ...images]);
      deleteProductAction(_id, [...new Set(imgs)]);
    }
  };

  return (
    <AdminLayout>
      <div className="mt-3 mb-3">
        <Link to="/product">
          <Button variant="primary">
            <i className="fas fa-arrow-left"> </i> Back{" "}
          </Button>{" "}
        </Link>{" "}
      </div>{" "}
      <h1> Update Product </h1> <hr />
      <div className="hhh"></div>
      <div className="text-end py-3">
        <Button variant="danger" onClick={() => handleOnDelete(_id)}>
          {" "}
          Delete Product{" "}
        </Button>{" "}
      </div>
    </AdminLayout>
  );
};
