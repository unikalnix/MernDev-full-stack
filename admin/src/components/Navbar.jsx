import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { handleLogout } = useAuth();
  return (
    <div className="flex items-center justify-between bg-black text-white h-15 p-5 border-b border-b-[#1E2939] sticky top-0 z-10">
      <h1>Mern Dev Archives - Admin</h1>
      <div className="flex items-center justify-between gap-5">
        <button
          className="border border-[#99A1AF] px-4 py-2 cursor-pointer transition-all duration-200 hover:border-[#99a1afa7] hover:text-[#99a1afa7]"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
