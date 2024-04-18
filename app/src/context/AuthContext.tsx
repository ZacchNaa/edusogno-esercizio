import React, { createContext, useContext, useState } from "react";
import { EventData, UserData } from "../types";
interface AuthContextType {
  userRole: string;
  userData: UserData | null;
  userEvents: EventData | null;
  setUserRole: (role: string) => void;
  setUserData: (data: UserData | null) => void;
  setUserEvents: (data: EventData | null) => void;
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
  const [userRole, setUserRole] = useState<string>('');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userEvents, setUserEvents] = useState<EventData | null>(null);

  return (
    <AuthContext.Provider value={{ userRole, userData, userEvents, setUserRole, setUserData, setUserEvents }}>
      {children}
    </AuthContext.Provider>
  );
};
