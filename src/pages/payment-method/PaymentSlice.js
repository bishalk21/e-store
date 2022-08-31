import {
  createSlice
} from "@reduxjs/toolkit";
const initialState = {
  paymentMethod: [],
};
const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {
    setPaymentMethod: (state, {
      payload = []
    }) => {
      state.paymentMethod = payload;
    },
  },
});

const {
  reducer,
  actions
} = paymentMethodSlice;

export const {
  setPaymentMethod
} = actions;

export default reducer;