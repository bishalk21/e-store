import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./pages/login/userSlice";
import systemReducer from "./pages/system-state/systemSlice";
import categoryReducer from "./pages/categories/categorySlice";
import paymentMethodReducer from "./pages/payment-method/pmSlice";
import productReducer from "./pages/products/productSlice";
import orderReducer from "./pages/orders/orderSlice";
import clientReducer from "./pages/users/userSlice";
import reviewReducer from "./pages/reviews/reviewSlice";

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemReducer,
    category: categoryReducer,
    paymentMethod: paymentMethodReducer,
    products: productReducer,
    orders: orderReducer,
    users: clientReducer,
    reviews: reviewReducer,
  },
});

export default store;
