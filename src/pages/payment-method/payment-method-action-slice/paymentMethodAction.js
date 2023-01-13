import { toast } from "react-toastify";
import {
  fetchPaymentMethod,
  postPaymentMethod,
} from "../../../helpers/axiosHelper";
import { setModalShow } from "../../system-state/systemStateSlice";
import { setPaymentMethod } from "./paymentMethodSlice";

export const getPaymentMehodAction = () => async (dispatch) => {
  const { status, paymentMethod } = await fetchPaymentMethod();

  status === "success" && dispatch(setPaymentMethod(paymentMethod));
};

// post payment method action
export const postPaymentMehodAction = (data) => async (dispatch) => {
  const promisePending = await postPaymentMethod(data);
  toast.promise(promisePending, { pending: "Please Wait...!" });

  const { status, message } = await promisePending;
  toast[status](message);

  status === "success" &&
    dispatch(setModalShow()) &&
    dispatch(getPaymentMehodAction());
};
