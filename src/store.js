import { configureStore } from "@reduxjs/toolkit";
import adminUserReducer from "./pages/admin-login/admin-reducer-action/adminUserSlice";
import categoryReducer from "./pages/categories/category-reducer/categorySlice";
import orderReducer from "./pages/orders/order-reducer-action/orderSlice";
import paymentMethodReducer from "./pages/payment-method/payment-method-action-slice/paymentMethodSlice";
import productReducer from "./pages/products/product-slice-action/productSlice";
import reviewsReducer from "./pages/reviews/reviews-redux-actions/reviewsSlice";
import systemStateReducer from "./pages/system-state/systemStateSlice";
import userReducer from "./pages/users/users-redux-actions/userSlice";

const store = configureStore({
  reducer: {
    adminUser: adminUserReducer,
    systemState: systemStateReducer,
    category: categoryReducer,
    paymentMethod: paymentMethodReducer,
    products: productReducer,
    orders: orderReducer,
    users: userReducer,
    reviews: reviewsReducer,
  },
});

export default store;
