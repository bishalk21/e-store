import { toast } from "react-toastify";
import { loginAdminUser } from "../../helper/axiosHelper.js";
import { setUser } from "./userSlice.js";
export const loginAdminUserAction = (data) => async (dispatch) => {
  const resultPromise = await loginAdminUser(data);

  toast.success(resultPromise, { pending: "please wait..." });

  const { status, message, user } = await resultPromise;

  toast[status](message);
  status === "success" && dispatch(setUser(user));
};
