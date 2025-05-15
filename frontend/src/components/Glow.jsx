import React from "react";

const Glow = ({ bg, left, top, mdLeft, mdTop }) => {
  return (
    <div
      style={{
        background: `radial-gradient(
          circle at center,
          ${bg},
          rgba(0, 0, 0, 0) 70%
        )`,
        animation: "pulseGlow 4s ease-in-out infinite",
        filter: "blur(80px)",
      }}
      className={`-z-50 absolute left-[${left}] top-[${top}] w-[500px] h-[500px] sm:w-[500px] sm:h-[500px] md:left-[${mdLeft}] md:top-[${mdTop}]`}
    ></div>
  );
};

export default Glow;
