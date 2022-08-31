import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductAction } from "../../pages/products/ProductAction";

export const ProductTable = () => {
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductAction());
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Name</th>
          <th>QTY</th>
          <th>Price</th>
          <th>Sales Price</th>
          <th>Sales Date</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {productList.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.status}</td>
            <td>{item.name}</td>
            <td>{item.qty}</td>
            <td>{item.price}</td>
            <td>{item.salesPrice}</td>
            <td>
              {item.salesStartDate} - {item.salesEndDate}
            </td>
            <td>
              {" "}
              <Link to={`/product/edit/${item._id}`}>
                <Button variant="primary">Edit</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
