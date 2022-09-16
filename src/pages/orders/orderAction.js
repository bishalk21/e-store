import { fetchorders } from "../../helpers/axiosHelper";
import { setOrders, setSelectedOrder } from "./orderSlice";

export const getOrders = () => async (dispatch) => {
  const { status, orders } = await fetchorders();

  dispatch(setOrders(orders));
};

export const getSingleOrder = (_id) => async (dispatch) => {
  const { status, orders } = await fetchorders(_id);

  status === "success" && dispatch(setSelectedOrder(orders));
};
