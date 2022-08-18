import {
  configureStore
} from "@reduxjs/toolkit";

import userReducer from "./pages/login/userSlice";

import systemSlice from "./pages/system-st/SystemSlice";

import categoryReducer from "./pages/category/CategorySlice";

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemSlice,
    category: categoryReducer,
  },
});
export default store;