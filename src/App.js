import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminRegistration } from "./pages/admin-registration/AdminRegistration";
import { AdminLogin } from "./pages/admin-login/AdminLogin";
import EmailVerificationPage from "./pages/admin-registration/EmailVerificationPage";
import { ToastContainer } from "react-toastify";
import { AdminDashboard } from "./pages/dashboard/AdminDashboard";
import { Product } from "./pages/products/Product";
import { PrivateRouter } from "./components/private-router/PrivateRouter";
import { Category } from "./pages/categories/Category";
import { PaymentMethod } from "./pages/payment-method/PaymentMethod";
import { AddNewProduct } from "./components/products/AddNewProduct";
import { EditProduct } from "./components/products/EditProduct";
import { AdminProfile } from "./pages/admin-profile/AdminProfile";
import { AdminResetPassword } from "./pages/admin-login/reset-password/AdminResetPassword";
import { Orders } from "./pages/orders/Orders";
import { OrderDetails } from "./pages/orders/OrderDetails";
import { Reviews } from "./pages/reviews/Reviews";
import { Users } from "./pages/users/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <AdminDashboard />
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
                <AddNewProduct />
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
            path="/payment"
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
                <Orders />
              </PrivateRouter>
            }
          />

          <Route
            path="/orders/:_id"
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
                <Reviews />
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

          <Route path="/" element={<AdminLogin />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/register" element={<AdminRegistration />} />
          <Route path="/reset-password" element={<AdminResetPassword />} />
          <Route
            path="/admin/verify-email"
            element={<EmailVerificationPage />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
