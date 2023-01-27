import { toast } from "react-toastify";
import {
  deleteAdminUser,
  fetchNewAccessJWT,
  getAdminUser,
  getAllAdminUser,
  loginAdminUser,
  updateAdminUserPassword,
  updateAdminUserProfile,
} from "../../../helpers/axiosHelper";
import { setAdminUser, setAllAdminUser } from "./adminUserSlice";

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
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
};

// fetch user and mount in the redux store
export const getAdminUserAction = (token) => async (dispatch) => {
  const { status, user } = await getAdminUser(token);

  status === "success" && dispatch(setAdminUser(user));
};

// fetch all user and mount in the redux store
export const getAllAdminUserAction = () => async (dispatch) => {
  const { status, users } = await getAllAdminUser();

  status === "success" && dispatch(setAllAdminUser(users));
};

// AUTO-LOGIN
export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");
  // 1. check if accessJWT exist, fetch user and mount user in our redux store
  if (accessJWT) {
    dispatch(getAdminUserAction());
  }
  // 2. if refreshJWT exist, fetch new accessJWT and fetch user using the newly fetch accessJWT
  else if (refreshJWT) {
    const token = await fetchNewAccessJWT();

    token ? dispatch(getAdminUserAction(token)) : dispatch(logoutUserAction());
  } else {
    dispatch(logoutUserAction());
  }
};

// update admin user action
export const updateAdminUserProfileAction = (data) => async (dispatch) => {
  const promisePending = updateAdminUserProfile(data);
  toast.promise(promisePending, { pending: "Please wait...!" });

  const { status, message } = await promisePending;
  toast[status](message);

  status === "success" && dispatch(getAdminUserAction());
};

// update admin user password action
export const updateAdminUserPasswordAction = async (data) => {
  const promisePending = updateAdminUserPassword(data);
  toast.promise(promisePending, { pending: "Please wait...!" });

  const { status, message } = await promisePending;
  toast[status](message);
};

// delete admin user
export const deleteAdminUserAction = (_id) => async (dispatch) => {
  const promisePending = deleteAdminUser(_id);
  toast.promise(promisePending, { pending: "Please wait...!" });

  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getAllAdminUserAction());
};
