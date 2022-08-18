import axios from 'axios';
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEP = rootUrl + 'admin-user';
const categoryEP = rootUrl + 'category';

export const apiProcessor = async ({
    method,
    url,
    data
}) => {
    try {
        const response = await axios({
            method,
            url,
            data,
        })
        return response.data;
    } catch (error) {
        return {
            status: "success",
            message: error.message
        }
    }
}

// post new admin user
export const postNewAdminUser = (data) => {

    const option = {
        method: "post",
        url: adminUserEP,
        data,
    }
    return apiProcessor(option);


}

// verify new admin user

export const verifyNewAdminUser = (data) => {

    const option = {
        method: "patch",
        url: adminUserEP + "/verify-email",
        data,
    }
    return apiProcessor(option);

}
export const loginAdminUser = (data) => {

    const option = {
        method: "post",
        url: adminUserEP + "/login",
        data,
    }
    return apiProcessor(option);

}

// fetch all category

export const fetchAllCategories = (_id) => {

    const option = {
        method: "get",
        url: _id ? categoryEP + "/" + _id : categoryEP,
    }
    return apiProcessor(option);
}

// post category

export const postAllCategories = (data) => {

    const option = {
        method: "post",
        url: categoryEP,
        data
    }
    return apiProcessor(option);

}