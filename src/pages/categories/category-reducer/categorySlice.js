import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, { payload = [] }) => {
      state.categories = payload;
    },
  },
});

const { reducer, actions } = CategorySlice;
export const { setCategories } = actions;
export default reducer;
