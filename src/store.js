import { configureStore } from "@reduxjs/toolkit";
import adminUserReducer from "./pages/admin-login/admin-reducer-action/adminUserSlice";
import categoryReducer from "./pages/categories/category-reducer/categorySlice";
import systemStateReducer from "./pages/system-state/systemStateSlice";

const store = configureStore({
  reducer: {
    adminUser: adminUserReducer,
    systemState: systemStateReducer,
    category: categoryReducer,
  },
});

export default store;
