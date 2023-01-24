import React, { useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleOrdersAction } from "../../pages/orders/order-reducer-action/orderAction";
import { setSelectedOrders } from "../../pages/orders/order-reducer-action/orderSlice";

export const OrderEditForm = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { orders, selectedOrder } = useSelector((state) => state.orders);
  const { cart } = selectedOrder;

  useEffect(() => {
    // check if we have orders in our state, if so select the order from the state
    if (orders.length) {
      const selectOrder = orders.filter((item) => item._id === _id);
      dispatch(setSelectedOrders(selectOrder));
    } else {
      // otherwise fetch from the server
      dispatch(getSingleOrdersAction(_id));
    }
  }, [dispatch, orders, _id]);

  return (
    <>
      {/* status */}
      <div className="fw-bold py-2 d-flex justify-content-between">
        <div>Status: {selectedOrder.status}</div>
        <div className="">
          <Form className="d-flex">
            <Form.Group>
              <Form.Select>
                <option value="">-- Select --</option>
                <option value="shipped">Shipped</option>
                <option value="cancelled">Cancelled</option>
              </Form.Select>
            </Form.Group>
            <Button variant="warning">Update</Button>
          </Form>
        </div>
      </div>

      {/* buyer info */}
      <div className="shipingInfo card p-2 mt-3">
        <h4>Shipping Details</h4>
        <hr />
        <p>
          Order Date: <br />
          Name: {selectedOrder?.buyer.firstName} {selectedOrder?.buyer.lastName}
          <br />
          Phone: {selectedOrder?.buyer.phone}
          <br />
          Email: {selectedOrder?.buyer.email}
          <br />
          Shipping Address: {selectedOrder?.shipping.street},{" "}
          {selectedOrder?.shipping.suburb}, {selectedOrder?.shipping.postcode}{" "}
          {selectedOrder?.shipping.state}
          <br />
        </p>
      </div>

      {/* payment info */}
      <div className="paymentInfo card p-2 mt-3">
        <h4>Payment Info</h4>
        <hr />
        <p>
          Status: {selectedOrder?.paymentInfo.status}
          <br />
          Total Paid: {selectedOrder?.paymentInfo.paidAmount}
          <br />
          Paid Date: {selectedOrder?.paymentInfo.paidDate}
          <br />
          Method: {selectedOrder?.paymentInfo.method}
          <br />
          Transaction ID: {selectedOrder?.paymentInfo.transactionId}
          <br />
        </p>
      </div>

      {/* cart info */}
      <div className="cartInfo card p-2 mt-3">
        <h4>Cart Details</h4>
        <hr />
        <Table striped bordered hover>
          <thead>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img src={item.thumbnail} width="100px" alt="" />
                </td>
                <td>{item.productName}</td>
                <td>{item.salesPrice}</td>
                <td>{item.quantity}</td>
                <td>{item.subTotal}</td>
              </tr>
            ))}

            <tr className="fw-bolder">
              <td colSpan={5}>Total</td>
              <td>$ {selectedOrder.cartTotal}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Add note form */}
      <Form className="mt-3 card p-3">
        <Form.Group>
          <Form.Label>Add Note</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Add some note here"
            rows={4}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary">Add Note</Button>
      </Form>

      {/* message history info */}
      <div className="note-history mt-3">
        Date: 1023-10-13
        <div className="card p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel unde
          exercitationem, itaque, quas vitae atque quam alias non ipsam illo
          natus similique eum odit mollitia, a repudiandae quaerat quidem
          impedit!
        </div>
      </div>
      <div className="note-history mt-3">
        Date: 1023-10-13
        <div className="card p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel unde
          exercitationem, itaque, quas vitae atque quam alias non ipsam illo
          natus similique eum odit mollitia, a repudiandae quaerat quidem
          impedit!
        </div>
      </div>
      <div className="note-history mt-3">
        Date: 1023-10-13
        <div className="card p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel unde
          exercitationem, itaque, quas vitae atque quam alias non ipsam illo
          natus similique eum odit mollitia, a repudiandae quaerat quidem
          impedit!
        </div>
      </div>
    </>
  );
};
