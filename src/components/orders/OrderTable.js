import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrdersAction } from "../../pages/orders/order-reducer-action/orderAction";

export const OrderTable = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrdersAction());
  }, [dispatch]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Byer Name</th>
            <th>Order Total</th>
            <th>Payment Status</th>
            <th>Order Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item?.status}</td>
              <td>
                {item?.buyer?.firstName} {item?.buyer?.lastName}
              </td>
              <td>{item?.totalAmount}</td>
              <td>{item?.paymentInfo?.status}</td>
              <td>
                <Link to={`/orders/${item?._id}`}>
                  <Button variant="info">View details</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
