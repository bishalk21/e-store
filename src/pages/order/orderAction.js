import { fetchOrders } from "../../helpers/axiosHelper";
import { setOrders, setSelectedOrder } from "./orderSlice";

export const fetchOrdersAction = () => async (dispatch) => {
  const { status, orders } = await fetchOrders();
  dispatch(setOrders(orders));
};
