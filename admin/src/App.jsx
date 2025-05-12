import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import Projects from "../src/pages/Projects";
import Messages from "../src/pages/Messages";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthContext";
import PageNotFound from "./pages/PageNotFound";
import Loader from "./components/Loader";

const App = () => {
  const location = useLocation();
  const { isLogin } = useAuth();
  useEffect(() => {}, [location.pathname]);
  useEffect(() => {}, [isLogin]);
  if (isLogin === null) {
    return <Loader/>
  }
  return (
    <div className="flex w-full">
      {isLogin && <Sidebar pathname={location.pathname} />}
      <div className="w-full">
        {isLogin && <Navbar />}
        <Routes>
          {
            <Route
              path="/login"
              element={!isLogin ? <Login /> : <Navigate to={"/"} />}
            />
          }
          <Route
            path="/"
            element={isLogin ? <Dashboard /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/projects"
            element={isLogin ? <Projects /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/project/:id"
            element={isLogin ? <Projects /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/messages"
            element={isLogin ? <Messages /> : <Navigate to={"/login"} />}
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
