import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  //   const isAuth = false;
  //   return isAuth ? children : <Navigate to="/" />;

  const location = useLocation();

  const { adminUsers } = useSelector((state) => state.adminUser);
  return adminUsers._id ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};
