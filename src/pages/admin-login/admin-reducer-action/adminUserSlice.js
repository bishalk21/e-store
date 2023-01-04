import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adminUsers: {},
}

const adminUserSlice = createSlice({
    name: 'adminUser',
    initialState,
    reducers: {
        setAdminUser: (state, {payload}) => {
            state.adminUsers = payload;
        }
    }
})

const {reducer, actions} = adminUserSlice;
export const {setAdminUser} = actions;
export default reducer;