import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddPaymentMethod } from "../../pages/payment-method-form/AddPaymentMethod";
import { EditPaymentM } from "../../pages/payment-method-form/EditPM";
import {
  deletePaymentMethod,
  getPaymentMethod,
} from "../../pages/payment-method/PaymentAction";
import { setSelectedPaymentMethod } from "../../pages/payment-method/PaymentSlice";

export const PaymentTableF = ({ ShowForm, handleOnAddPM }) => {
  const dispatch = useDispatch();

  const { paymentMethod } = useSelector((state) => state.paymentMethod);

  useEffect(() => {
    dispatch(getPaymentMethod());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      alert("Delete Successfully");
      dispatch(deletePaymentMethod(_id));
    }
  };

  const handleOnEdit = (item) => {
    dispatch(setSelectedPaymentMethod(item));
    handleOnAddPM("edit");
  };

  const pmForm = {
    add: <AddPaymentMethod />,
    edit: <EditPaymentM />,
  };

  return (
    <div>
      {pmForm[ShowForm]}
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th> # </th> <th> First Name </th> <th> Last Name </th>{" "}
            <th> Username </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {paymentMethod.map((item, i) => (
            <tr key={item._id}>
              <td> {i + 1} </td> <td> {item.status} </td> <td> {item.name} </td>{" "}
              <td>
                <Button variant="info" onClick={() => handleOnEdit(item)}>
                  {" "}
                  <i className="fa-solid fa-edit"> </i> Edit{" "}
                </Button>{" "}
                <Button
                  variant="danger"
                  type="submit"
                  onClick={() => handleOnDelete(item._id)}
                >
                  {" "}
                  <i className="fa-solid fa-trash"> </i> Delete{" "}
                </Button>{" "}
              </td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </Table>{" "}
    </div>
  );
};
