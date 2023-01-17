import axios from "axios";

// rootURL
const rootUrl = process.env.REACT_APP_API_ENDPOINT;

// admin EP
const adminUserEp = rootUrl + "/admin-user";

// categories EP
const categoriesEp = rootUrl + "/category";

// payment method EP
const paymentMethodEp = rootUrl + "/payment-method";

// products EP
const productsEp = rootUrl + "/product";

const apiProcessor = async ({ method, url, data, isPrivate, token }) => {
  try {
    // if isPrivate is true then add token to the header
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
    // console.log(error)

    let message = error.message;

    // if error is 401 then fetch new accessJWT
    if (error.response && error.response?.status === 401) {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");
    }

    // if error.response.data
    if (error.response && error.response.data) {
      message = error.response.data.message;
    }

    // if jwt expired
    if (message === "jwt expired") {
      // call the api to get new access jwt and store in session and call the api processor
      const accessJWT = await fetchNewAccessJWT();

      if (accessJWT) {
        return await apiProcessor({
          method,
          url,
          data,
          isPrivate,
          token: accessJWT,
        });
      }
    }

    return {
      status: "error",
      message,
    };
  }
};

// fetch new accessjwt
export const fetchNewAccessJWT = async () => {
  const option = {
    method: "get",
    url: adminUserEp + "/accessjwt",
    isPrivate: true,
    token: localStorage.getItem("refreshJWT"),
  };
  const { status, accessJWT } = await apiProcessor(option);

  status === "success" && sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};

// ================ admin user

// get admin user
export const getAdminUser = (data) => {
  const option = {
    method: "get",
    url: adminUserEp,
    data,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// post new admin user
export const postNewAdminUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEp,
    data,
  };
  return apiProcessor(option);
};

// verify admin user
export const verifyAdminUser = (data) => {
  const option = {
    method: "patch",
    url: adminUserEp + "/verify-email",
    data,
  };
  return apiProcessor(option);
};

// login admin user
export const loginAdminUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEp + "/login",
    data,
  };
  return apiProcessor(option);
};

// ================ categories
// fetch categories
export const fetchCategories = (_id) => {
  const option = {
    method: "get",
    url: _id ? categoriesEp + "/" + _id : categoriesEp, // if _id is present then add it to the url
    isPrivate: true,
  };
  return apiProcessor(option);
};

// post categories
export const postCategories = (data) => {
  const option = {
    method: "post",
    url: categoriesEp,
    data,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// update categories
export const updateCategories = (data) => {
  const option = {
    method: "put",
    url: categoriesEp,
    data,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// delete categories
export const deleteCategories = (_id) => {
  const option = {
    method: "delete",
    url: categoriesEp + "/" + _id,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// ============== payment method
// fetch payment method
export const fetchPaymentMethod = () => {
  const option = {
    method: "get",
    url: paymentMethodEp,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// post payment method
export const postPaymentMethod = (data) => {
  const option = {
    method: "post",
    url: paymentMethodEp,
    isPrivate: true,
    data,
  };
  return apiProcessor(option);
};

// delete payment method
export const deletePaymentMethod = (_id) => {
  const option = {
    method: "delete",
    url: paymentMethodEp + "/" + _id,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// update payment method
export const updatePaymentMethod = (data) => {
  const option = {
    method: "put",
    url: paymentMethodEp,
    isPrivate: true,
    data,
  };
  return apiProcessor(option);
};

// ========================== products api
// fetch product
export const fetchProduct = () => {
  const option = {
    method: "get",
    url: productsEp,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// post product
export const postProduct = (data) => {
  const option = {
    method: "post",
    url: productsEp,
    isPrivate: true,
    data,
  };
  return apiProcessor(option);
};
