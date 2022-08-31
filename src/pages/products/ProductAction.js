import { fetchAllProducts } from "../../helper/axiosHelper";
import { setProducts } from "./ProductSlice";

export const getProductAction = () => async (dispatch) => {
  const { status, products } = await fetchAllProducts();
  status === "success" && dispatch(setProducts(products));
};
