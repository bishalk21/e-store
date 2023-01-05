import { toast } from "react-toastify";
import { loginAdminUser } from "../../../helpers/axiosHelper";
import { setAdminUser } from "./adminUserSlice";

export const loginUserAction = (data) => async (dispatch) => {
  const resultPromise = loginAdminUser(data);

  toast.promise(resultPromise, {
    pending: "please wait...",
  });

  const { status, message, user, accessJWT, refreshJWT } = await resultPromise;

  toast[status](message);

  if (status === "success") {
    // accessJWT in sessionStorage
    sessionStorage.setItem("accessJWT", accessJWT);
    // refreshJWT in localStorage
    localStorage.setItem("refreshJWT", refreshJWT);
    dispatch(setAdminUser(user));
  }
};

// logout
export const logoutUserAction = () => (dispatch) => {
  dispatch(setAdminUser({}));
};
