import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEP = rootUrl + "admin-user";
const categoryEP = rootUrl + "category";
const paymentMethodEP = rootUrl + "payment-method";

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  token
}) => {
  try {
    let headers = isPrivate ? {
        Authorization: token || sessionStorage.getItem("accessJWT"),
      } :
      null;

    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    let message = error.message;

    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");
    }

    if (error.response && error.response.data) {
      message = error.response.data.message;
    }

    if (message === "jwt expired") {
      // call the api to get new access token and send it to the user, store the new access token in the local storage and fetch user data
      // message = "Your session has expired. Please login again";

      const accessJWT = await getNewAdminAccessToken();
      if (accessJWT) {
        return apiProcessor({
          method,
          url,
          data,
          isPrivate,
          token
        });
      }
    }

    return {
      status: "success",
      message: error.message,
    };
  }
};

// post new admin user
export const postNewAdminUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEP,
    data,
  };
  return apiProcessor(option);
};

// verify new admin user

export const verifyNewAdminUser = (data) => {
  const option = {
    method: "patch",
    url: adminUserEP + "/verify-email",
    data,
    isPrivate: true,
  };
  return apiProcessor(option);
};
export const loginAdminUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEP + "/login",
    data,
  };
  return apiProcessor(option);
};

//fetech all users
export const fetchAllUsers = (token) => {
  const option = {
    method: "get",
    url: adminUserEP,
    isPrivate: true,
    token,
  };
  return apiProcessor(option);
};

// get new admin access token
export const getNewAdminAccessToken = async () => {
  const token = localStorage.getItem("refreshJWT");
  const option = {
    // method: "post",
    method: "get",
    url: adminUserEP + "/accessjwt",
    isPrivate: true,
    token,
  };
  const {
    status,
    message,
    accessJWT
  } = await apiProcessor(option);
  status === "success" && sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};

// fetch all category

export const fetchAllCategories = (_id) => {
  const option = {
    method: "get",
    url: _id ? categoryEP + "/" + _id : categoryEP,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// post category

export const postAllCategories = (data) => {
  const option = {
    method: "post",
    url: categoryEP,
    data,
    isPrivate: true,
  };
  return apiProcessor(option);
};

//update category

export const updateCategory = (data) => {
  const option = {
    method: "put",
    url: categoryEP,
    data,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// delete category

export const deleteCategory = (_id) => {
  const option = {
    method: "delete",
    url: categoryEP + "/" + _id,
    isPrivate: true,
  };
  return apiProcessor(option);
};


//=======================payment method==========================
export const fetchAllPaymentMethods = () => {
  const option = {
    method: "get",
    url: paymentMethodEP,
    isPrivate: true,
  };
  return apiProcessor(option);
}