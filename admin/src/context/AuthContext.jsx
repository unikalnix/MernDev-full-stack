import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(null);

  const checkAuth = async () => {
    try {
      const res = await axiosInstance.get("/check-auth", {
        withCredentials: true,
      });
      if (res.data.ok) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      setIsLogin(false);
      throw new Error(error);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post(
        "/api/auth/logout",
        {},
        { withCredentials: true }
      );
      if (res.data.ok) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    } catch (error) {
      setIsLogin(true);
      throw new Error(error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {}, [isLogin]);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
