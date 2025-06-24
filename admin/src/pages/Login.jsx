import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setIsLogin } = useAuth();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/api/auth/login", {
        email,
        password,
      });

      if (res.data.ok) {
        setIsLogin(true);
        navigate("/");
      } else {
        setIsLogin(false);
        console.log(res.data.message);
      }
    } catch (error) {
      setIsLogin(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full bg-[#0E0E0E] min-h-screen">
      <div className="w-full p-2 sm:w-3/4 md:w-1/2 lg:w-1/3 m-auto min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-[30px] relative w-fit font-bold">
          Portfolio{" "}
          <span className="absolute top-0 right-0 w-[7px] h-[7px] rounded-full bg-[#E45535]"></span>
        </h1>
        <p className="text-[#99A1AF] text-[16px]">Admin Panel</p>
        <form
          onSubmit={submitHandler}
          className="border border-[#1E2939] rounded-md bg-[#1A1A1A] min-h-[300px] w-full p-4 mt-4 flex flex-col"
        >
          <h1 className="text-center mb-6">Login</h1>
          <label className="text-[14px] text-[#99A1AF]" htmlFor="email">
            Email
          </label>
          <input
            className="bg-[#1E2939] mt-2 mb-2 rounded-md h-[42px] outline-none pl-4"
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
          />
          <label className="text-[14px] text-[#99A1AF]" htmlFor="password">
            Password
          </label>
          <input
            className="bg-[#1E2939] mt-2 mb-2 rounded-md h-[42px] outline-none pl-4"
            placeholder="Enter your password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <input
            className={`mt-4 w-full py-2 rounded-md cursor-pointer transition-all duration-200 
    ${
      loading
        ? "bg-[#ff5e3a66] text-[#ffffff84] cursor-not-allowed"
        : "bg-[#FF5E3A] text-white hover:bg-[#ff5e3ab8]"
    }`}
            type="submit"
            value={loading ? "Logging..." : "Login"}
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
