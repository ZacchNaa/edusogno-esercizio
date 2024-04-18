import React, { createContext, useContext, useState } from "react";
import { UserData } from "../types";
interface AuthContextType {
  userData: UserData | null;
  isAuthenticated: boolean;
  setUserData: (data: UserData | null) => void;
  login: (userId: string, data: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(() => {
    const userDataFromLocalStorage = localStorage.getItem("user");
    return userDataFromLocalStorage ? JSON.parse(userDataFromLocalStorage) : null;
  })
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem("userId"));

  const login = (userId: string, data: UserData) => { 
    localStorage.setItem("user", JSON.stringify(data))
    localStorage.setItem("userId", userId)
    setIsAuthenticated(true)
    setUserData(data)
   }
  const logout = () => { 
    localStorage.clear()
    setIsAuthenticated(false)
   }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, login, logout, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

