import { toast } from "react-toastify";
import {
  deleteProduct,
  fetchProduct,
  postProduct,
} from "../../../helpers/axiosHelper";
import { setProducts, setSelectedProduct } from "./productSlice";

export const getProductAction = () => async (dispatch) => {
  const { status, products } = await fetchProduct();

  status === "success" && dispatch(setProducts(products));
};

export const getSingleProductAction = (_id) => async (dispatch) => {
  const { status, products } = await fetchProduct(_id);

  status === "success" && dispatch(setSelectedProduct(products));
};

export const postProductAction = async (data) => {
  const promisePending = postProduct(data);
  toast.promise(promisePending, { pending: "Please wait...!" });

  const { status, message } = await promisePending;
  toast[status](message);
  //   status === "success" && dispatch(setProducts(products));
};

export const deleteProductAction = async (_id, data) => {
  const promisePending = deleteProduct(_id, data);
  toast.promise(promisePending, { pending: "Please wait...!" });

  const { status, message } = await promisePending;
  toast[status](message);
  //   status === "success" && dispatch(setProducts(products));
};
