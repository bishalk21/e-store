import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrdersAction } from "../../pages/order/orderAction";

export const OrderTable = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrdersAction());
  }, [dispatch]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Buyer Name</th>
          <th>Order Total</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td> {item.status} </td>
            <td> {item?.buyer?.fName} </td>
            <td> {item.total} </td>
            <td> {item?.paymentInfo?.status} </td>
            <td>
              <Link to={`/order/${item?._id}`}>
                <Button variant="info">View Details</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
