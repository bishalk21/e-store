import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showSideMenu: false,
  modalShow: false, // global modal state for all modals
};

const systemSlice = createSlice({
  name: "adminSystem",
  initialState,
  reducers: {
    setShowMenu: (state, { payload }) => {
      // state is the current state
      state.showSideMenu = payload;
    },
    setModalShow: (state) => {
      // state is the current state
      state.modalShow = !state.modalShow;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { setShowMenu, setModalShow } = actions;

export default reducer;
