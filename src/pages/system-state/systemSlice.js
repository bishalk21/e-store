import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideMenu: false,
  modalShow: false,
  // passwordForm: false,
};
const systemSlice = createSlice({
  name: "adminSystem",
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

const { reducer, actions } = systemSlice;

export const { setShowSideMenu, setModalShow } = actions; //setPasswordForm

export default reducer;
