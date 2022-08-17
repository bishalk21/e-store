import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showSideMenu: false, // s
};

const systemSlice = createSlice({
  name: "adminSystem",
  initialState,
  reducers: {
    setShowMenu: (state, { payload }) => {
      // state is the current state
      state.showSideMenu = payload;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { setShowMenu } = actions;

export default reducer;
