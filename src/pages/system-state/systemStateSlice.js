import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideMenu: false,
  modalShow: false,
  // passwordForm: "otp",
};

const systemStateSlice = createSlice({
  name: "systemState",
  initialState,
  reducers: {
    setShowSideMenu: (state, { payload }) => {
      state.showSideMenu = payload;
    },
    setModalShow: (state) => {
      state.modalShow = !state.modalShow;
    },
    // setPasswordForm: (state, { payload }) => {
    //   state.passwordForm = payload;
    // },
  },
});

const { reducer, actions } = systemStateSlice;
export const { setShowSideMenu, setModalShow } = actions; // setPasswordForm
export default reducer;
