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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* privte */}
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
            path="/product"
            element={
              <PrivateRouter>
                <Product />
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
