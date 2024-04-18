import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedDashboardRoute: React.FC = () => {
  const { userData } = useAuth();

  if (userData){
    return <Outlet/>
  }
  return <Navigate to="/login" />
};



export default ProtectedDashboardRoute;
