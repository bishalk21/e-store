import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  paymentMethod: [],
};
const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {
    setPaymentMethods: (state, { payload }) => {
      state.paymentMethod = payload;
    },
  },
});

const { reducer, actions } = paymentMethodSlice;

export const { setPaymentMethod } = actions;

export default reducer;
