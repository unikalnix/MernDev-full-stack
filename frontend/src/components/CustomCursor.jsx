import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="mix-blend-difference fixed top-0 left-0 w-5 h-5 bg-[#fafafa] rounded-full pointer-events-none z-[9999] transition-transform duration-75"
      style={{
        transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0)`,
      }}
    />
  );
};

export default CustomCursor;
