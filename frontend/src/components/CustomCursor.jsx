import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMd, setMd] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const screenWidth = () => {
      setMd(window.innerWidth <= 768);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("resize", screenWidth);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.addEventListener("resize", screenWidth);
    };
  }, [position, isMd]);

  return (
    <div
      className="mix-blend-difference fixed top-0 left-0 w-5 h-5 bg-[#fafafa] rounded-full pointer-events-none z-[9999] transition-transform duration-75"
      style={{
        transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0)`,
        display: isMd && "none",
      }}
    />
  );
};

export default CustomCursor;
