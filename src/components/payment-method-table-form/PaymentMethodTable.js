import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePaymentMethodAction,
  getPaymentMehodAction,
} from "../../pages/payment-method/payment-method-action-slice/paymentMethodAction";
import { setSelectedEditPm } from "../../pages/payment-method/payment-method-action-slice/paymentMethodSlice";
import { AddPaymentMethod } from "./AddPaymentMethod";
import { EditPaymentMethod } from "./EditPaymentMethod";

export const PaymentMethodTable = ({ showForm, handleOnAddPM }) => {
  const dispatch = useDispatch();

  const { paymentMethods } = useSelector((state) => state.paymentMethod);

  useEffect(() => {
    dispatch(getPaymentMehodAction());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this payment?")) {
      // alert(_id);
      dispatch(deletePaymentMethodAction(_id));
    }
  };

  const handleOnEdit = (item) => {
    dispatch(setSelectedEditPm(item));
    handleOnAddPM("edit");
  };

  const paymentForm = {
    add: <AddPaymentMethod />,
    edit: <EditPaymentMethod />,
  };

  return (
    <>
      {/* {showForm ? <AddPaymentMethod /> : <EditPaymentMethod />} */}
      {paymentForm[showForm]}

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
                <Button variant="warning" onClick={() => handleOnEdit(item)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
