import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../pages/orders/orderAction";
import { PaginationBase } from "../pagination/PaginationBase";

const productPerPage = 10;

export const OrderTable = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const [display, setDisplayOrders] = useState([]);

  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    !orders.length && dispatch(getOrders());
    setDisplayOrders(orders);
  }, [dispatch, orders]);

  const handleOnPageChange = (num) => {
    setActive(num);
  };

  const pages = Math.ceil(display.length / productPerPage);

  const productStartAt = (active - 1) * productPerPage; // 0
  const productEndAt = productStartAt + productPerPage; // 10

  const handleOnStatusChange = (e) => {
    const { value } = e.target;
    setActive(1);

    if (!value) {
      return setDisplayOrders(orders);
    }

    const filteredOrders = orders.filter(
      (item) => item.status.toLowerCase() === value
    );

    setDisplayOrders(filteredOrders);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        {/* orders length*/}
        <h3>Orders ({display.length})</h3>
        <div>
          <Form>
            <Form.Group className="d-flex">
              <Form.Select
                aria-label="Default select example"
                onChange={handleOnStatusChange}
              >
                <option value="">-- Select Status --</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
                <option value="processing">Processing</option>
                <option value="delivered">Delivered</option>
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
          {display.map(
            (item, i) =>
              i >= productStartAt &&
              i < productEndAt && (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.status}</td>
                  <td>
                    {item?.buyer?.fName} {item?.buyer?.lName}
                  </td>
                  <td>{item.totalAmount}</td>
                  <td>{item?.paymentInfo?.status}</td>
                  <td>
                    <Link to={`/order/${item?._id}`}>
                      <Button variant="info">Vew Details</Button>
                    </Link>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </Table>
      <PaginationBase
        pages={pages}
        active={active}
        handleOnPageChange={handleOnPageChange}
      />
    </>
  );
};
