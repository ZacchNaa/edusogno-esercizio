import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedEventManagementRoute: React.FC = () => {
  const { userRole } = useAuth();

  if (userRole === "admin"){
    return <Outlet/>
  }
  return <Navigate to="/" />
};

export default ProtectedEventManagementRoute
