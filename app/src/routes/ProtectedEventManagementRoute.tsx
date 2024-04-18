import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedEventManagementRoute: React.FC = () => {
  const { userData } = useAuth();

  if (userData?.role === "admin"){
    return <Outlet/>
  }
  return <Navigate to="/" />
};

export default ProtectedEventManagementRoute
