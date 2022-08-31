import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login/Login.js";
import { AdminRegistration } from "./pages/adminRegistration/AdminRegistration.js";
import { EmailVerification } from "./pages/adminRegistration/EmaiVerification.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dahboard } from "./pages/Dahboard.js";
import { Product } from "./pages/products/Product";
import { PrivateRouter } from "./components/private-router/PrivateRouter";
import { Category } from "./pages/category/Category";
import { PaymentMethod } from "./pages/payment-method/PaymentMethod";
import { EditProduct } from "./pages/products/EditProduct";
import { NewProduct } from "./pages/products/NewProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {" "}
          {/* privte */}{" "}
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                {" "}
                <Dahboard />
              </PrivateRouter>
            }
          />{" "}
          <Route
            path="/products"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          />{" "}
          <Route
            path="/categories"
            element={
              <PrivateRouter>
                <Category />
              </PrivateRouter>
            }
          />{" "}
          <Route
            path="/payment-method"
            element={
              <PrivateRouter>
                <PaymentMethod />
              </PrivateRouter>
            }
          />{" "}
          <Route
            path="/product"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          />{" "}
          <Route
            path="/product/new"
            element={
              <PrivateRouter>
                <NewProduct />
              </PrivateRouter>
            }
          />{" "}
          <Route
            path="/product/edit/:_id"
            element={
              <PrivateRouter>
                <EditProduct />
              </PrivateRouter>
            }
          />{" "}
          <Route path="/" element={<LoginPage />} />{" "}
          <Route path="/login" element={<LoginPage />} />{" "}
          <Route path="/register" element={<AdminRegistration />} />{" "}
          <Route path="/admin/verify-email" element={<EmailVerification />} />{" "}
        </Routes>{" "}
        <ToastContainer />{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
