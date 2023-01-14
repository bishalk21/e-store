import { fetchProduct } from "../../../helpers/axiosHelper";
import { setProducts } from "./productSlice";

export const getProductAction = () => async (dispatch) => {
  const { status, products } = await fetchProduct();

  status === "success" && dispatch(setProducts(products));
};
