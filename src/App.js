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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dahboard />} />{" "}
          <Route path="/product" element={<Product />} />{" "}
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
