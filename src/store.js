import {
  configureStore
} from "@reduxjs/toolkit";

import userReducer from "./pages/login/userSlice";

import systemSlice from "./pages/system-st/SystemSlice";

import categoryReducer from "./pages/category/CategorySlice";

import paymentMethodReducer from "./pages/payment-method/PaymentSlice";

import ProductReducer from "./pages/products/ProductSlice";

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemSlice,
    category: categoryReducer,
    paymentMethod: paymentMethodReducer,
    product: ProductReducer,
  },
});
export default store;