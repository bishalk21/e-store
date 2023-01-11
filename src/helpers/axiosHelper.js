import axios from "axios";

// rootURL
const rootUrl = process.env.REACT_APP_API_ENDPOINT;

// admin EP
const adminUserEp = rootUrl + "/admin-user";

// categories EP
const categoriesEp = rootUrl + "/category";

const apiProcessor = async ({ method, url, data, isPrivate }) => {
  try {
    // if isPrivate is true then add token to the header
    const headers = isPrivate
      ? { Authorization: sessionStorage.getItem("accessJWT") }
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

    return {
      status: "error",
      message: error.message,
    };
  }
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
