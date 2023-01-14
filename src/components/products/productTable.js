import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductAction } from "../../pages/products/product-slice-action/productAction";

export const ProductTable = () => {
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductAction());
  }, []);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
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
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.salesPrice}</td>
                <td>
                  {item.salesStartDate} - {item.salesEndDate}
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
