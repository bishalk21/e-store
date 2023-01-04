import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adminUser: {},
}

const adminUserSlice = createSlice({
    name: 'adminUsert',
    initialState,
    reducers: {
        setAdminUser: (state, {payload}) => {
            state.adminUser = payload;
        }
    }
})

const {reducer, actions} = adminUserSlice;
export const {setAdminUser} = actions;
export default reducer;