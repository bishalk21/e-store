import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      if (!payload && !state.productList) {
        return;
      }
      state.productList = payload;
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
  },
});

const { reducer, actions } = productSlice;
export const { setProducts, setSelectedProduct } = actions;
export default reducer;
