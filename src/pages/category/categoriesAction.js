import {
  fetchAllCategories,
  postAllCategories,
} from "../../helper/axiosHelper";
import { setCategory } from "./CategorySlice";
import { toast } from "react-toastify";

export const getCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await fetchAllCategories();
  //   console.log(categories);

  status === "success" && dispatch(setCategory(categories));
};

// post new category
export const postNewCategoryAction = (data) => async (dispatch) => {
  const promisePending = postAllCategories(data);

  toast.promise(promisePending, { pending: "Creating Category..." });

  const { status, message } = await promisePending;
  console.log(status, message);
  //   console.log(message);

  toast[status](message);
  status === "success" && dispatch(getCategoriesAction());
};
