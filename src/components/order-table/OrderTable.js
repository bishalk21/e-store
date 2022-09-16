import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../pages/orders/orderAction";

export const OrderTable = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
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
          <tr>
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
        ))}
      </tbody>
    </Table>
  );
};
