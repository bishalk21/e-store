import { toast } from "react-toastify";
import { fetchCategories, postCategories } from "../../../helpers/axiosHelper";
import { setCategories } from "./categorySlice";

export const fetchCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategories();
  //   console.log(categories);
  status === "success" && dispatch(setCategories(categories));
};

// post categories action
export const postCategoriesAction = (data) => async (dispatch) => {
  const promisePending = postCategories(data);

  toast.promise(promisePending, { pending: "Please Wait..." });

  const { status, message } = await promisePending;
  toast[status](message);

  status === "success" && dispatch(fetchCategoriesAction());
};
