import { toast } from "react-toastify";
import { fetchAllProducts, postProduct } from "../../helper/axiosHelper";
import { setProducts } from "./ProductSlice";

export const getProductAction = () => async (dispatch) => {
  const { status, products } = await fetchAllProducts();
  status === "success" && dispatch(setProducts(products));
};

//product action
export const postProductAction = (data) => async (dispatch) => {
  const responsePending = postProduct(data);
  toast.promise(responsePending, { pending: "Saving..." });
  const { status, message } = await responsePending;
  toast[status](message);
  // status === "success" && dispatch(getProductAction());
};
