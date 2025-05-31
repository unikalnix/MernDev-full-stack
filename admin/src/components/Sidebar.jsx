import { Folder, LayoutDashboard, LogOut, Mail } from 'lucide-react';
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = ({ pathname }) => {
  const { handleLogout } = useAuth();
  
  // Navigation items array for reuse
  const navItems = [
    { path: "/", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/projects", icon: Folder, label: "Projects" },
    { path: "/messages", icon: Mail, label: "Messages" },
  ];
  
  return (
    <>
      {/* Desktop Sidebar - hidden on mobile, visible on sm and up */}
      <aside className="w-1/4 h-screen sticky top-0 bg-[#121212] text-[#99A1AF] hidden sm:flex sm:flex-col sm:justify-between p-4 border-r border-r-[#1E2939]">
        <div className="">
          <h1 className="text-white">Mern Dev Archives</h1>
          <p>Admin Panel</p>
        </div>
        <hr className="w-full h-[1px] bg-[#1E2939] border-none" />

        <div className="h-[70%]">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 py-3 px-2 rounded-md ${
                    pathname === item.path ? "bg-[#2A1916] text-[#ff5e3a]" : ""
                  } ${
                    pathname !== item.path ? "hover:bg-[#1E2939] hover:text-white" : ""
                  } transition-all duration-200`}
                >
                  <item.icon />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="w-full h-[1px] bg-[#1E2939] border-none" />
        <div 
          onClick={handleLogout}
          className="flex items-center gap-3 py-3 px-2 hover:bg-[#1E2939] hover:text-white rounded-md cursor-pointer transition-all duration-200"
        >
          <LogOut />
          <h1>Logout</h1>
        </div>
      </aside>
      
      {/* Mobile Bottom Navigation - visible on mobile, hidden on sm and up */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#121212] border-t border-[#1E2939] sm:hidden z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-2 px-3 rounded-md w-1/4 ${
                pathname === item.path ? "text-[#ff5e3a]" : "text-[#99A1AF]"
              } transition-all duration-200`}
            >
              <item.icon size={20} className="mb-1" />
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex flex-col items-center justify-center py-2 px-3 rounded-md w-1/4 text-[#99A1AF] transition-all duration-200"
          >
            <LogOut size={20} className="mb-1" />
            <span className="text-xs">Logout</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;