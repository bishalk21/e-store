import { toast } from "react-toastify";
import {
  fetchAllUsers,
  getNewAdminAccessToken,
  loginAdminUser,
} from "../../helper/axiosHelper";
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

export const logoutAdminUserAction = () => (dispatch) => {
  dispatch(setUser({}));
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
};

// fetch user data from database and mount in the redux store
export const fetchUserDataAction = (token) => async (dispatch) => {
  const { status, message, user } = await fetchAllUsers(token);
  status === "success" && user && dispatch(setUser(user));
};

// auto login if refresh token is available
export const autoLoginAdminUserAction = () => async (dispatch) => {
  // if access token is available, fetch user data and mount user in redux store
  //step 2
  // else
  // if refresh token is available, request for access token and fetch user data and mount user in redux store
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT"); // step 2

  if (accessJWT) {
    dispatch(fetchUserDataAction());
  } else if (refreshJWT) {
    const token = await getNewAdminAccessToken();
    token ? dispatch(fetchUserDataAction(token)) : logoutAdminUserAction();
    // if (token) {
    //   dispatch(fetchUserDataAction());
    // } else {
    //   dispatch(logoutAdminUserAction());
    // }
    //step 2
  } else {
    dispatch(logoutAdminUserAction());
  }
};
