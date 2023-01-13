import { toast } from "react-toastify";
import {
  deletePaymentMethod,
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
  const promisePending = postPaymentMethod(data);
  toast.promise(promisePending, { pending: "Please Wait...!" });

  const { status, message } = await promisePending;
  toast[status](message);

  status === "success" &&
    dispatch(setModalShow()) &&
    dispatch(getPaymentMehodAction());
};

// delete payment method action
export const deletePaymentMethodAction = (_id) => async (dispatch) => {
  const promisePending = deletePaymentMethod(_id);
  toast.promise(promisePending, { pending: "Deleting payment...!" });

  const { status, message } = await promisePending;
  toast[status](message);

  status === "success" && dispatch(getPaymentMehodAction());
};
