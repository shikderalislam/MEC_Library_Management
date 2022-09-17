import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MeclibContext } from "../../context/AppContext";
import useAuth from '../../hooks/useAuth'


const UserRoutes = () => {
  const {isAuthenticate} = useContext(MeclibContext)
  const isAuth = isAuthenticate()

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default UserRoutes;
