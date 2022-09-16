import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEP = rootUrl + "/admin-user";
const categoryEP = rootUrl + "/category";
const PMEP = rootUrl + "/payment-method";
const productEP = rootUrl + "/product";
const orderEP = rootUrl + "/order";
const userEP = rootUrl + "/users";
const reviewEP = rootUrl + "/reviews";

const apiProcesser = async ({ method, url, data, isPrivate, token }) => {
  try {
    const headers = isPrivate
      ? { Authorization: token || sessionStorage.getItem("accessJWT") }
      : null;

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
      // call the api to get new accessJWT and store in the session and recall the api Processer

      const accessJWT = await getNewAccessJWT();
      if (accessJWT) {
        return apiProcesser({ method, url, data, isPrivate, token });
      }
    }

    return {
      status: "error",
      message,
    };
  }
};

// ===========admin user apis
//post new admin user
export const postUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEP,
    data,
    isPrivate: true,
  };
  return apiProcesser(option);
};

//verify  admin user account
export const eamilVerifyAdminUser = (data) => {
  const option = {
    method: "patch",
    url: adminUserEP + "/verify-email",
    data,
  };
  return apiProcesser(option);
};

//login  admin user
export const loginAdminUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEP + "/login",
    data,
  };
  return apiProcesser(option);
};

//get  admin user
export const getAdminUser = (token) => {
  const option = {
    method: "get",
    url: adminUserEP,
    isPrivate: true,
    token,
  };
  return apiProcesser(option);
};
//delete  admin user
export const deleteAdminUser = (_id) => {
  const option = {
    method: "delete",
    url: adminUserEP + "/" + _id,
    isPrivate: true,
  };
  return apiProcesser(option);
};

// update user profile
export const updateAdminUser = (data) => {
  const option = {
    method: "put",
    url: adminUserEP,
    isPrivate: true,
    data,
  };
  return apiProcesser(option);
};

// update user password
export const updateAdminUserPassword = (data) => {
  const option = {
    method: "patch",
    url: adminUserEP,
    isPrivate: true,
    data,
  };
  return apiProcesser(option);
};

// request otp for update user password
export const requestOtpresetAdminUserPassword = (data) => {
  const option = {
    method: "post",
    url: adminUserEP + "/request-password-reset-otp",
    data,
  };
  return apiProcesser(option);
};

// reset user password
export const resetAdminUserPassword = (data) => {
  const option = {
    method: "patch",
    url: adminUserEP + "/reset-password",
    data,
  };
  return apiProcesser(option);
};

//fetch new accessJWT
export const getNewAccessJWT = async () => {
  const token = localStorage.getItem("refreshJWT");
  const option = {
    method: "get",
    url: adminUserEP + "/accessjwt",
    isPrivate: true,
    token,
  };
  const { status, accessJWT } = await apiProcesser(option);

  status === "success" && sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};

//fetch all admin users
export const getAllAdminUsers = async () => {
  const option = {
    method: "get",
    url: adminUserEP + "/all-admin",
    isPrivate: true,
  };

  return apiProcesser(option);
};

// ========== category api calls
//fetch categories
export const fetchCategory = (_id) => {
  const option = {
    method: "get",
    url: _id ? categoryEP + "/" + _id : categoryEP,
    isPrivate: true,
  };
  return apiProcesser(option);
};

//post new category
export const postCategory = (data) => {
  const option = {
    method: "post",
    url: categoryEP,
    data,
    isPrivate: true,
  };
  return apiProcesser(option);
};

//update  category
export const updateCategory = (data) => {
  const option = {
    method: "put",
    url: categoryEP,
    data,
    isPrivate: true,
  };
  return apiProcesser(option);
};

//delete  category
export const deleteCategory = (_id) => {
  const option = {
    method: "delete",
    url: categoryEP + "/" + _id,
    isPrivate: true,
  };
  return apiProcesser(option);
};

// =========== payment methods apis
//fetch payment methods
export const fetchPM = () => {
  const option = {
    method: "get",
    url: PMEP,
    isPrivate: true,
  };
  return apiProcesser(option);
};

export const postPM = (data) => {
  const option = {
    method: "post",
    url: PMEP,
    isPrivate: true,
    data,
  };
  return apiProcesser(option);
};

export const deletePM = (_id) => {
  const option = {
    method: "delete",
    url: PMEP + "/" + _id,
    isPrivate: true,
  };
  return apiProcesser(option);
};

export const updatePM = (data) => {
  const option = {
    method: "put",
    url: PMEP,
    isPrivate: true,
    data,
  };
  return apiProcesser(option);
};

// ============ product apis
export const fetchProducts = (_id) => {
  const url = _id ? productEP + "/" + _id : productEP;
  const option = {
    method: "get",
    url,
    isPrivate: true,
  };
  return apiProcesser(option);
};

export const postProduct = (data) => {
  const option = {
    method: "post",
    url: productEP,
    isPrivate: true,
    data,
  };
  return apiProcesser(option);
};

export const updateProduct = (data) => {
  const option = {
    method: "put",
    url: productEP,
    isPrivate: true,
    data,
  };
  return apiProcesser(option);
};

export const deleteProduct = (_id, data) => {
  const option = {
    method: "delete",
    url: productEP + "/" + _id,
    isPrivate: true,
    data,
  };
  return apiProcesser(option);
};

// ======== orders
export const fetchorders = (_id) => {
  const url = _id ? orderEP + "/" + _id : orderEP;
  const option = {
    method: "get",
    url,
    isPrivate: true,
  };
  return apiProcesser(option);
};

// ======== users
export const fetchUsers = (_id) => {
  const url = _id ? userEP + "/" + _id : userEP;
  const option = {
    method: "get",
    url,
    isPrivate: true,
  };
  return apiProcesser(option);
};

// ======== users
export const fetchReviews = (_id) => {
  const url = _id ? reviewEP + "/" + _id : reviewEP;
  const option = {
    method: "get",
    url,
    isPrivate: true,
  };
  return apiProcesser(option);
};
