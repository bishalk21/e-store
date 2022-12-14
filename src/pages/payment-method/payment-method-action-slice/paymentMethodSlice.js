import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentMethods: [],
};

const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {
    setPaymentMethod: (state, { payload }) => {
      state.paymentMethods = payload;
    },
  },
});

const { reducer, actions } = paymentMethodSlice;
export const { setPaymentMethod } = actions;
export default reducer;
