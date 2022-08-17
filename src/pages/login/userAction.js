import { toast } from "react-toastify";
import { loginAdminUser } from "../../helper/axiosHelper";
import { setUser } from "./userSlice";

export const loginAdminUserAction = (data) => async (dispatch) => {
  const resultPromise = loginAdminUser(data);

  toast.promise(resultPromise, {
    pending: "please wait...",
  });

  const { status, message, user, accessJWT, refreshJWT } = await resultPromise;

  toast[status](message);
  if (status === "success") {
    sessionStorage.setItem("accessJWT", accessJWT);
    localStorage.setItem("refreshJWT", refreshJWT);
    dispatch(setUser(user));
  }
};

export const logoutAdminUserAction = () => async (dispatch) => {
  // sessionStorage.removeItem("accessJWT");
  // localStorage.removeItem("refreshJWT");
  dispatch(setUser({}));
};
