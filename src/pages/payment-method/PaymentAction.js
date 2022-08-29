import { fetchAllPaymentMethods } from "../../helper/axiosHelper";

import { setPaymentMethod } from "./PaymentSlice";

export const getPaymentMethod = () => async (dispatch) => {
  const { status, paymentMethod } = await fetchAllPaymentMethods();
  status === "success" && dispatch(setPaymentMethod(paymentMethod));
};
