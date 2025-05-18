import React, { useEffect, useState } from "react";

const Glow = ({ bg, left, top, mdLeft, mdTop }) => {
  const [position, setPosition] = useState({ left, top });
    const [size, setSize] = useState({ width: "500px", height: "500px" });

  useEffect(() => {
    const updatePositionAndSize = () => {
      const isMd = window.innerWidth >= 768;
      setPosition({
        left: isMd ? mdLeft : left,
        top: isMd ? mdTop : top,
      });
       setSize({
        width: isMd ? "500px" : "300px",
        height: isMd ? "500px" : "300px",
      });
    };

    updatePositionAndSize();

    window.addEventListener("resize", updatePositionAndSize);
    return () => window.removeEventListener("resize", updatePositionAndSize);
  }, [left, top, mdLeft, mdTop]);

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
        position: "absolute",
        width: size.width,
        height: size.height,
        left: position.left,
        top: position.top,
        zIndex: -50,
      }}
    ></div>
  );
};

export default Glow;
