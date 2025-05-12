import { Folder, LayoutDashboard, LogOut, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = ({ pathname }) => {
  const {handleLogout} = useAuth();
  return (
    <>
      <aside className="w-1/4 h-screen sticky top-0 bg-[#121212] text-[#99A1AF] sm:flex sm:flex-col sm:justify-between p-4 hidden border-r border-r-[#1E2939]">
        <div className="">
          <h1 className="text-white">Mern Dev Archives</h1>
          <p>Admin Panel</p>
        </div>
        <hr className="w-full h-[1px] bg-[#1E2939] border-none" />

        <div className="h-[70%]">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className={`flex items-center gap-3 py-3 px-2 rounded-md ${
                  pathname === "/" ? "bg-[#2A1916] text-[#ff5e3a]" : ""
                } ${
                  pathname !== "/" ? "hover:bg-[#1E2939] hover:text-white" : ""
                } transition-all duration-200`}
              >
                <LayoutDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`flex items-center gap-3 py-3 px-2 rounded-md ${
                  pathname === "/projects" ? "bg-[#2A1916] text-[#ff5e3a]" : ""
                } ${
                  pathname !== "/projects"
                    ? "hover:bg-[#1E2939] hover:text-white"
                    : ""
                } transition-all duration-200`}
              >
                <Folder />
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/messages"
                className={`flex items-center gap-3 py-3 px-2 rounded-md ${
                  pathname === "/messages" ? "bg-[#2A1916] text-[#ff5e3a]" : ""
                } ${
                  pathname !== "/messages"
                    ? "hover:bg-[#1E2939] hover:text-white"
                    : ""
                } transition-all duration-200`}
              >
                <Mail />
                Messages
              </Link>
            </li>
          </ul>
        </div>
        <hr className="w-full h-[1px] bg-[#1E2939] border-none" />
        <div 
        onClick={handleLogout}
        className="flex items-center gap-3 py-3 px-2 hover:bg-[#1E2939] hover:text-white rounded-md cursor-pointer transition-all duration-200">
          <LogOut />
          <h1>Logout</h1>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
