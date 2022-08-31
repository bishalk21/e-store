import { toast } from "react-toastify";
import {
  deletePM,
  fetchAllPaymentMethods,
  postPM,
  updatePM,
} from "../../helper/axiosHelper";
import { setModalShow } from "../system-st/SystemSlice";

import { setPaymentMethod } from "./PaymentSlice";

export const getPaymentMethod = () => async (dispatch) => {
  const { status, data } = await fetchAllPaymentMethods();
  status === "success" && dispatch(setPaymentMethod(data));
};

export const postPaymentMethod = (data) => async (dispatch) => {
  const promisePending = postPM(data);

  toast.promise(promisePending, {
    pending: "Creating...",
  });

  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" &&
    dispatch(setModalShow()) &&
    dispatch(getPaymentMethod());
};

//delete
export const deletePaymentMethod = (data) => async (dispatch) => {
  const promisePending = deletePM(data);

  toast.promise(promisePending, {
    pending: "Creating...",
  });

  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" &&
    dispatch(setModalShow()) &&
    dispatch(getPaymentMethod());
};

export const updatePayment = (data) => async (dispatch) => {
  const promisePending = updatePM(data);

  toast.promise(promisePending, {
    pending: "Updating...",
  });

  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" &&
    dispatch(setModalShow()) &&
    dispatch(getPaymentMethod());
};
