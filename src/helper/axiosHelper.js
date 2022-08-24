import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEP = rootUrl + "admin-user";
const categoryEP = rootUrl + "category";

export const apiProcessor = async ({ method, url, data, isPrivate }) => {
  try {
    let headers = isPrivate
      ? {
          Authorization: sessionStorage.getItem("accessJWT"),
        }
      : null;

    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
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
