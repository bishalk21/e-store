import { toast } from "react-toastify";
import {
  deleteCategories,
  fetchCategories,
  postCategories,
  updateCategories,
} from "../../../helpers/axiosHelper";
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

// update categories action
export const updateCategoriesAction = (data) => async (dispatch) => {
  const promisePending = updateCategories(data);

  toast.promise(promisePending, { pending: "Updating Category..." });

  const { status, message } = await promisePending;
  toast[status](message);

  status === "success" && dispatch(fetchCategoriesAction());
};

// delete categories action
export const deleteCategoriesAction = (data) => async (dispatch) => {
  const promisePending = deleteCategories(data);

  toast.promise(promisePending, { pending: "Deleting Category..." });

  const { status, message } = await promisePending;
  toast[status](message);

  status === "success" && dispatch(fetchCategoriesAction());
};
