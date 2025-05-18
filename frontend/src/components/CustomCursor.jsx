import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMd, setMd] = useState(false);
  const animationFrame = useRef(null);

  useEffect(() => {
    const screenWidth = () => {
      setMd(window.innerWidth <= 768);
    };

    screenWidth(); // initial check

    const moveCursor = (e) => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      animationFrame.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("resize", screenWidth);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", screenWidth);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <div
      className="mix-blend-difference fixed top-0 left-0 w-5 h-5 bg-[#fafafa] rounded-full pointer-events-none z-[9999] transition-transform duration-75"
      style={{
        transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0)`,
        display: isMd ? "none" : "block",
      }}
    />
  );
};

export default CustomCursor;
