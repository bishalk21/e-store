import { fetchPaymentMethod } from "../../../helpers/axiosHelper";
import { setPaymentMethod } from "./paymentMethodSlice";

export const getPaymentMehodAction = () => async (dispatch) => {
  const { status, paymentMethod } = await fetchPaymentMethod();

  status === "success" && dispatch(setPaymentMethod(paymentMethod));
};
