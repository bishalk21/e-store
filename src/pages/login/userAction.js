import { toast } from "react-toastify";
import { loginAdminUser } from "../../helper/axiosHelper";
import { setUser } from "./userSlice";

export const loginAdminUserAction = (data) => async (dispatch) => {
  const resultPromise = loginAdminUser(data);

  toast.promise(resultPromise, {
    pending: "please wait...",
  });

  const { status, message, user } = await resultPromise;

  toast[status](message);
  status === "success" && dispatch(setUser(user));
};
