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
    return <Loader />;
  }
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="flex-1 flex flex-col md:flex-row">
        {isLogin && <Sidebar pathname={location.pathname} />}
        <div className="flex-1 flex flex-col">
          {isLogin && <Navbar />}
          <main className="flex-1 pb-16 md:pb-0">
            {" "}
            {/* Add bottom padding on mobile */}
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
