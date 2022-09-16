import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import AdminRegistration from "./pages/admin-registration/AdminRegistration";
import EmailVerification from "./pages/admin-registration/EmailVerification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/products/Product";
import { PrivateRouter } from "./components/private-router/PrivateRouter";
import Category from "./pages/categories/Category";
import PaymentMethod from "./pages/payment-method/PaymentMethod";
import NewProduct from "./pages/products/NewProduct";
import EditProduct from "./pages/products/EditProduct";
import AdminProfile from "./pages/admin-profile/AdminProfile";
import ResetPassword from "./pages/login/ResetPassword";
import Order from "./pages/orders/Order";
import OrderDetails from "./pages/orders/OrderDetails";
import Review from "./pages/reviews/Review";
import Users from "./pages/users/Users";
import AdminUsers from "./pages/users/AdminUsers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* private router */}
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          />
          <Route
            path="/product/new"
            element={
              <PrivateRouter>
                <NewProduct />
              </PrivateRouter>
            }
          />
          <Route
            path="/product/edit/:_id"
            element={
              <PrivateRouter>
                <EditProduct />
              </PrivateRouter>
            }
          />
          <Route
            path="/category"
            element={
              <PrivateRouter>
                <Category />
              </PrivateRouter>
            }
          />
          <Route
            path="/payment-method"
            element={
              <PrivateRouter>
                <PaymentMethod />
              </PrivateRouter>
            }
          />
          <Route
            path="/admin-profile"
            element={
              <PrivateRouter>
                <AdminProfile />
              </PrivateRouter>
            }
          />
          <Route
            path="/orders"
            element={
              <PrivateRouter>
                <Order />
              </PrivateRouter>
            }
          />
          <Route
            path="/order/:_id"
            element={
              <PrivateRouter>
                <OrderDetails />
              </PrivateRouter>
            }
          />
          <Route
            path="/reviews"
            element={
              <PrivateRouter>
                <Review />
              </PrivateRouter>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRouter>
                <Users />
              </PrivateRouter>
            }
          />
          <Route
            path="/admin-users"
            element={
              <PrivateRouter>
                <AdminUsers />
              </PrivateRouter>
            }
          />

          <Route
            path="/register"
            element={
              <PrivateRouter>
                <AdminRegistration />
              </PrivateRouter>
            }
          />

          {/* public router */}
          <Route path="/" element={<LoginPage />} />

          <Route path="/admin/verify-email" element={<EmailVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
