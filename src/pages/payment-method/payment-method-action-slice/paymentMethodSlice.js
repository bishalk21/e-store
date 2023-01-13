import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentMethods: [],
  selectedEditPm: {},
};

const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {
    setPaymentMethod: (state, { payload }) => {
      state.paymentMethods = payload;
    },
    setSelectedEditPm: (state, { payload }) => {
      state.selectedEditPm = payload;
    },
  },
});

const { reducer, actions } = paymentMethodSlice;
export const { setPaymentMethod, setSelectedEditPm } = actions;
export default reducer;
