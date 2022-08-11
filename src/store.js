import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./pages/login/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store;
