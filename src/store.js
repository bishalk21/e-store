import {
  configureStore
} from "@reduxjs/toolkit";

import userReducer from "./pages/login/userSlice";

import systemSlice from "./pages/system-st/SystemSlice";

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemSlice,
  },
});
export default store;