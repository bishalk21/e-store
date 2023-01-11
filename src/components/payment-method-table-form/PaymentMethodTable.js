import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentMehodAction } from "../../pages/payment-method/payment-method-action-slice/paymentMethodAction";

export const PaymentMethodTable = () => {
  const dispatch = useDispatch();

  const { paymentMethods } = useSelector((state) => state.paymentMethod);

  useEffect(() => {
    dispatch(getPaymentMehodAction());
  }, [dispatch]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td className="d-flex gap-2">
                <Button variant="warning">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
