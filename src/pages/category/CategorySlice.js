import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // initial state of the slice
  categories: [], // array of categories
};

const categorySlice = createSlice({
  name: "category", // name of the slice
  initialState,
  reducers: {
    // reducers are functions that return a new state
    setCategory: (state, { payload = [] }) => {
      //setCategory is the name of the action
      state.categories = payload;
    },
  },
});

const { reducer, actions } = categorySlice;
export const { setCategory } = actions;
export default reducer;
