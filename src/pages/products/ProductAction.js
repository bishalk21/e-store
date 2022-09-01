import { toast } from "react-toastify";
import {
  deleteProduct,
  fetchAllProducts,
  postProduct,
} from "../../helper/axiosHelper";
import { setProducts, setSelectedProduct } from "./ProductSlice";

export const getProductAction = () => async (dispatch) => {
  const { status, products } = await fetchAllProducts();
  status === "success" && dispatch(setProducts(products));
};

export const getSingleProductAction = (_id) => async (dispatch) => {
  const { status, products } = await fetchAllProducts(_id);
  status === "success" && dispatch(setSelectedProduct(products));
};

//product action
export const postProductAction = async (data) => {
  const responsePending = postProduct(data);
  toast.promise(responsePending, { pending: "Saving..." });
  const { status, message } = await responsePending;
  toast[status](message);
  // status === "success" && dispatch(getProductAction());
};

export const deleteProductAction = async (_id, data) => {
  const responsePending = deleteProduct(_id, data);
  toast.promise(responsePending, { pending: "Saving..." });
  const { status, message } = await responsePending;
  toast[status](message);
  // status === "success" && dispatch(getProductAction());
};
