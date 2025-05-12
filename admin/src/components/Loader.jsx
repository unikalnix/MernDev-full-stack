import React from "react";

const Loader = ({ text = "Loading" }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0E0E0E] backdrop-blur-sm z-50">
      <div className="relative flex flex-col items-center justify-center">
        {/* Outer spinning ring */}
        <div className="absolute w-32 h-32 rounded-full border-4 border-transparent border-t-[#ff5e3a] border-r-[#ff5e3a]/30 animate-spin"></div>

        {/* Middle pulsing ring */}
        <div className="absolute w-24 h-24 rounded-full border-4 border-[#ff5e3a]/20 animate-pulse"></div>

        {/* Inner spinning ring (opposite direction) */}
        <div className="absolute w-16 h-16 rounded-full border-4 border-transparent border-b-[#ff5e3a] border-l-[#ff5e3a]/30 animate-spin duration-700"></div>

        {/* Center static circle with text */}
        <div className="relative w-28 h-28 rounded-full bg-[#1a1a1a] flex items-center justify-center shadow-lg shadow-black/30">
          <div className="text-center">
            <span className="text-[#ff5e3a] font-medium">{text}</span>
            <div className="flex justify-center mt-1 space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff5e3a] animate-bounce"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff5e3a] animate-bounce delay-150"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff5e3a] animate-bounce delay-300"></div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute w-40 h-40 rounded-full border border-[#ff5e3a]/10 animate-pulse"></div>
        <div className="absolute w-48 h-48 rounded-full border border-[#ff5e3a]/5"></div>

        {/* Orbiting dots */}
        <div className="absolute w-40 h-40 animate-spin duration-3000">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#ff5e3a]"></div>
        </div>
        <div className="absolute w-40 h-40 animate-spin duration-5000">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ff5e3a]/70"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
