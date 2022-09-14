import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleOrderAction } from "../../pages/order/orderAction";
import { setSelectedOrder } from "../../pages/order/orderSlice";
import { Button, Form, Table } from "react-bootstrap";

export const OrderEditForm = () => {
  const dispatch = useDispatch();
  const { _id } = useParams(); // useParams is for getting the id from the store
  const { orders, selectedOrder } = useSelector((state) => state.orders); // get the orders from the redux store
  useEffect(() => {
    // checl if thwe have orders in our store, if so select the order with the id from the store
    if (orders.length) {
      const select = orders.filter((item) => item._id == _id)[0]; // find the order with the id from the store
      console.log(orders, select, _id);
      dispatch(setSelectedOrder(select)); // set the selected order in the store
    } else {
      // if we dont have orders in the store, then get the orders from the server
      dispatch(getSingleOrderAction(_id)); // get the order with the id from the server
    }
  }, [dispatch, orders, _id]);
  const { cart } = selectedOrder;
  return (
    <div>
      {/* status */}
      <div className="fw-bold py-2 d-flex  justify-content-between">
        <div>
          Order Status:
          <span className="text-capitalize"> {selectedOrder.status}</span>
        </div>
        <div className="">
          <Form className="d-flex">
            <Form.Group className="">
              <Form.Select>
                <option value="">--Select Status--</option>
                <option value="shipped">Shipped</option>
                <option value="cancelled">Cancelled</option>
              </Form.Select>
            </Form.Group>
            <Button variant="warning" type="submit">
              {" "}
              Update{" "}
            </Button>
          </Form>
        </div>
      </div>

      {/* buyer info */}
      <div className="shippingInfo mt-3">
        <h4 className="fw-bold">Shipping Info</h4>
        <hr />
        <p>
          Order Date: 20-02-2022 <br />
          Name: {selectedOrder?.buyer?.fName} <br />
          Email: {selectedOrder?.buyer?.email} <br />
          Phone: {selectedOrder?.buyer?.phone} <br />
          Address: {selectedOrder?.shipping?.address}{" "}
          {/* {selectedOrder?.shipping?.Suburb}, {selectedOrder?.shipping?.state},{" "}
          {selectedOrder?.shipping?.postcode},{" "}
          {selectedOrder?.shipping?.country}{" "} */}
        </p>
      </div>
      {/* payment info */}
      <div className="paymentInfo py-3">
        <h4 className="fw-bold">Payment Info</h4>
        <hr />
        <p>
          Payment Status: {selectedOrder?.paymentInfo?.status} <br />
          Payment Amount: {selectedOrder?.paymentInfo?.paidAmount} <br />
          Payment Method: {selectedOrder?.paymentInfo?.paymentMethod} <br />
          Payment Transaction ID: {
            selectedOrder?.paymentInfo?.transactionId
          }{" "}
        </p>
      </div>
      {/* Card info */}
      <div className="cardInfo py-3">
        <h4 className="fw-bold">Card Info</h4>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  {" "}
                  <img src={item?.thumbnail} alt="" width="50px" />
                </td>
                <td>{item?.productName}</td>
                <td>{item?.salesPrice}</td>
                <td>{item?.qty}</td>
                <td>{item?.subTotal}</td>
              </tr>
            ))}
            <tr className="fw-bold">
              <td colSpan="5">Total</td>
              <td>${selectedOrder?.cartTotal}</td>

              {/* <td>{cart.reduce((acc, item) => acc + item.subTotal, 0)}</td> */}
            </tr>
          </tbody>
        </Table>
      </div>

      {/* add note form */}
      <Form className="p-3 card">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fw-bold">Add Note</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Add Note"
            style={{
              caretColor: "red",
            }}
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Add Note
        </Button>
      </Form>
      {/* message history */}
      <div className="messageHistory mt-3">
        {/* DATE */}
        <h4 className="fw-bold">Date: 20-02-2022</h4>
        <hr />

        <div className="card p-3 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          molestias, repellat vitae delectus quasi hic aliquid voluptatibus,
          quod, aliquam nemo accusamus voluptatem dolores iste? Expedita libero
          consequatur ut assumenda exercitationem!
        </div>
      </div>
    </div>
  );
};
