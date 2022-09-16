import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOrder } from "../../pages/orders/orderSlice";
import { getSingleOrder } from "../../pages/orders/orderAction";
import { Form, Button, Table } from "react-bootstrap";

export const OrderEditForm = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { orders, selectedOrder } = useSelector((state) => state.orders);

  useEffect(() => {
    //check if we have orders in our state, if so, selecte the order form the state
    if (orders.length) {
      const select = orders.filter((item) => item._id === _id)[0];
      dispatch(setSelectedOrder(select));
    } else {
      dispatch(getSingleOrder(_id));
    }
    //otherwise, fetch from the server
  }, [dispatch, orders, _id]);

  const { cart } = selectedOrder;
  return (
    <div>
      {/* status */}
      <div className="fw fw-bold py-2 d-flex justify-content-between">
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
      <div className="shippingInfo card mb-3 p-2   mt-3">
        <h4>Shipping Details</h4>
        <hr />
        <p>
          Order Date: 20-2-2022 <br />
          Name: {selectedOrder?.buyer?.fName} {selectedOrder?.buyer?.lName}
          <br />
          Phone: {selectedOrder?.buyer?.phone} <br />
          Email: {selectedOrder?.buyer?.email}
          <br />
          Shipping Address: {selectedOrder?.shipping?.street}{" "}
          {selectedOrder?.shipping?.Suburb}, {selectedOrder?.shipping?.state} ,{" "}
          {selectedOrder?.shipping?.postcode},{" "}
          {selectedOrder?.shipping?.countery} <br />
        </p>
      </div>

      {/* payment info */}

      <div className="payment-info card  p-3">
        <h4>Payment Info</h4>
        <hr />
        Status: {selectedOrder?.paymentInfo?.status}
        <br />
        Totle Paid: ${selectedOrder?.paymentInfo?.paidAmount}
        <br />
        Paid Date: {selectedOrder?.paymentInfo?.paidDate}
        <br />
        Method: {selectedOrder?.paymentInfo?.method}
        <br />
        Transaction ID: {selectedOrder?.paymentInfo?.transactionId}
        <br />
      </div>

      {/* cart info */}
      <div className="card p-2 mt-3">
        <h4>Cart details</h4>
        <hr />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Qty</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img src={item.thumbnail} alt="" width="100px" />
                </td>
                <td>{item.productName}</td>
                <td>{item.salesPrice}</td>
                <td>{item.qty}</td>
                <td>{item.subTotal}</td>
              </tr>
            ))}
            <tr className="fw-bolder">
              <td colSpan={5}>Total </td>
              <td>$ {selectedOrder.cartTotal}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* add note form */}
      <Form className="mt-5 card p-3">
        <Form.Group className="mb-3">
          <Form.Label>Add Note</Form.Label>
          <Form.Control as="textarea" placeholder="add some note" rows={5} />
        </Form.Group>
        <Button variant="primary">Add Note</Button>
      </Form>

      {/* message history */}
      <div className="mt-5">
        <div className="note-history mt-3">
          Date: 10-03-2020
          <div className="card p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            veritatis quos voluptatibus quasi, omnis saepe ipsam labore? A,
            sequi. Voluptatibus maiores molestias iste eaque nostrum aliquid rem
            ratione laudantium temporibus.
          </div>
        </div>
        <div className="note-history mt-3">
          Date: 10-03-2020
          <div className="card p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            veritatis quos voluptatibus quasi, omnis saepe ipsam labore? A,
            sequi. Voluptatibus maiores molestias iste eaque nostrum aliquid rem
            ratione laudantium temporibus.
          </div>
        </div>
        <div className="note-history mt-3">
          Date: 10-03-2020
          <div className="card p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            veritatis quos voluptatibus quasi, omnis saepe ipsam labore? A,
            sequi. Voluptatibus maiores molestias iste eaque nostrum aliquid rem
            ratione laudantium temporibus.
          </div>
        </div>
      </div>
    </div>
  );
};
