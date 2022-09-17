import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MeclibContext } from "../../context/AppContext";

const AdminRoutes = () => {
  const { isAdminHandler } = useContext(MeclibContext);
  const isAdmin = isAdminHandler();
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
