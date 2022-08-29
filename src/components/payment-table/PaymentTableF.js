import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentMethod } from "../../pages/payment-method/PaymentAction.js";

export const PaymentTableF = () => {
  const dispatch = useDispatch();

  const { paymentMethod } = useSelector((state) => state.paymentMethod);

  useEffect(() => {
    dispatch(getPaymentMethod());
  }, [dispatch]);

  return (
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {paymentMethod.map((item, i) => (
          <tr key={item._id}>
            <td>{i + 1}</td>
            <td>{item.status}</td>
            <td>{item.name}</td>
            <td>
              <Button variant="info">
                {" "}
                <i className="fa-solid fa-edit"></i> Edit
              </Button>
              <Button variant="danger">
                {" "}
                <i className="fa-solid fa-trash"></i> Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
