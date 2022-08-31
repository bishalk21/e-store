import { toast } from "react-toastify";
import { fetchAllPaymentMethods, postPM } from "../../helper/axiosHelper";
import { setModalShow } from "../system-st/SystemSlice";

import { setPaymentMethod } from "./PaymentSlice";

export const getPaymentMethod = () => async (dispatch) => {
  const { status, pm } = await fetchAllPaymentMethods();
  status === "success" && dispatch(setPaymentMethod(pm));
};

export const postPaymentMethod = (data) => async (dispatch) => {
  const pending = postPM(data);

  toast.promise(pending, {
    pending: "Creating...",
  });

  const { status, message } = await pending;
  toast[status](message);
  status === "success" &&
    dispatch(setModalShow()) &&
    dispatch(getPaymentMethod());
};
