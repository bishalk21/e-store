import { fetchOrders } from "../../../helpers/axiosHelper";
import { setOrders } from "./orderSlice";

export const getOrdersAction = () => async (dispatch) => {
  const { status, orders } = await fetchOrders();
  dispatch(setOrders(orders));
};
