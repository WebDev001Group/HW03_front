import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  let isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to={{ pathname: "/" }} />;
};
