import React, { createContext, useContext, useState } from "react";
import { UserData } from "../types";

interface Message {
  text: string;
  type: string;
}
interface AuthContextType {
  userData: UserData | null;
  message: Message | null;
  isAuthenticated: boolean;
  setUserData: (data: UserData | null) => void;
  setMessage: (message: Message | null) => void;
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
    return userDataFromLocalStorage
      ? JSON.parse(userDataFromLocalStorage)
      : null;
  });
  const [message, setMessage] = useState<Message | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("userId")
  );

  const login = (userId: string, data: UserData) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("userId", userId);
    setIsAuthenticated(true);
    setUserData(data);
  };
  const logout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userData,
        message,
        login,
        logout,
        setUserData,
        setMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
