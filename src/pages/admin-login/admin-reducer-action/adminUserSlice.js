import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminUsers: {},
  allAdminUsers: [],
};

const adminUserSlice = createSlice({
  name: "adminUser",
  initialState,
  reducers: {
    setAdminUser: (state, { payload }) => {
      state.adminUsers = payload;
    },
    setAllAdminUser: (state, { payload }) => {
      state.allAdminUsers = payload;
    },
  },
});

const { reducer, actions } = adminUserSlice;
export const { setAdminUser, setAllAdminUser } = actions;
export default reducer;
