import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrdersAction } from "../../pages/orders/order-reducer-action/orderAction";
import { PaginationBasic } from "../pagination/PaginationBasic";

const productPerPage = 10;

export const OrderTable = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const [display, setDisplay] = useState([]);

  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    !orders.length && dispatch(getOrdersAction());
    setDisplay(orders);
  }, [dispatch, orders]);

  const handleOnPageClick = (num) => {
    setActive(num);
  };

  const handleOnStatusChange = (e) => {
    const { value } = e.target;
    setActive(1);

    if (!value) {
      return setDisplay(orders);
    }

    const filteredArg = orders.filter(
      (item) => item.status.toLowerCase() === value.toLowerCase()
    );
    setDisplay(filteredArg);
  };

  // const pages = Math.ceil(orders.length / productPerPage);
  const pages = Math.ceil(display.length / productPerPage);

  const productStartAt = productPerPage * (active - 1);
  const productEndAt = productStartAt + productPerPage;

  return (
    <>
      <div className="d-flex justify-content-between py-2">
        <div>{display.length} Found</div>
        <div className="">
          <Form>
            <Form.Group>
              <Form.Select onChange={handleOnStatusChange}>
                <option value="">-- Filter --</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="cancelled">Cancelled</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
      </div>
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
          {/* {orders.map( */}
          {display.map(
            (item, i) =>
              i >= productStartAt &&
              i < productEndAt && (
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
              )
          )}
        </tbody>
      </Table>
      <div className="d-flex align-items-center justify-content-center pt-3">
        <PaginationBasic
          pages={pages}
          active={active}
          handleOnPageClick={handleOnPageClick}
        />
      </div>
    </>
  );
};
