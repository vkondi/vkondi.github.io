import { createContext } from "react";

export interface AuthContextProps {
  isAuthenticated?: boolean;
}

const AuthContext = createContext<AuthContextProps>({ isAuthenticated: false });
export default AuthContext;
