"use client";
import { User } from "@/types/auth";
import { createContext, Dispatch, SetStateAction } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  login: (token: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const defaultUser: AuthContextType = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
  login: () => {},
  logout: () => {},
  isLoading: true,
};

// auth context
const AuthContext = createContext<AuthContextType>(defaultUser);

export default AuthContext;
