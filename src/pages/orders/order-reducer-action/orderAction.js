import { fetchOrders } from "../../../helpers/axiosHelper";
import { setOrders, setSelectedOrders } from "./orderSlice";

export const getOrdersAction = () => async (dispatch) => {
  const { status, orders } = await fetchOrders();
  dispatch(setOrders(orders));
};

export const getSingleOrdersAction = (_id) => async (dispatch) => {
  const { status, orders } = await fetchOrders(_id);

  // const orders = orders.length ? orders[0] : null;
  status === "success" && dispatch(setSelectedOrders(orders));
};
