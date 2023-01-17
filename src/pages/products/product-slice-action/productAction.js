import { toast } from "react-toastify";
import { fetchProduct, postProduct } from "../../../helpers/axiosHelper";
import { setProducts } from "./productSlice";

export const getProductAction = () => async (dispatch) => {
  const { status, products } = await fetchProduct();

  status === "success" && dispatch(setProducts(products));
};

export const postProductAction = (data) => async (dispatch) => {
  const promisePending = postProduct(data);
  toast.promise(promisePending, { pending: "Please wait...!" });

  const { status, message } = await promisePending;
  toast[status](message);
  //   status === "success" && dispatch(setProducts(products));
};
