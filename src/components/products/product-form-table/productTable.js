import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductAction } from "../../../pages/products/product-slice-action/productAction";

export const ProductTable = () => {
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Status</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Sales Price</th>
            <th>Sales Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={"http://localhost:8000/" + item.thumbnail}
                    alt=""
                    width="60px"
                    crossOrigin="anonymous"
                  />
                </td>
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.salesPrice}</td>
                <td>
                  {item.salesStartDate && item.salesStartDate.substr(0, 10)}{" "}
                  {item.salesStartDate ? "to " : "-"}
                  {item.salesEndDate && item.salesEndDate.substr(0, 10)}
                </td>
                <td>
                  <Link to={`/product/edit/${item._id}`}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
