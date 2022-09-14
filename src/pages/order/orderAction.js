import { fetchOrders } from "../../helpers/axiosHelper";
import { setOrders, setSelectedOrder } from "./orderSlice";

export const fetchOrdersAction = () => async (dispatch) => {
  const { status, orders } = await fetchOrders();
  dispatch(setOrders(orders));
};

// single OrderPage.js file
export const getSingleOrderAction = (_id) => async (dispatch) => {
  const { status, orders } = await fetchOrders(_id); // status, orders are destructured from the response
  // console.log("orders", orders);

  status === "success" && dispatch(setSelectedOrder(orders));
};
