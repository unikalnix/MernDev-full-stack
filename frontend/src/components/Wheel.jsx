import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Code, MonitorIcon, LayoutGrid, Zap } from "lucide-react"

const items = [
  {
    id: "frontend",
    icon: <Code className="w-6 h-6" />,
    position: "top",
    angle: 0,
    title: "Front-End Development",
    description: "Creating responsive, accessible interfaces with modern frameworks.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "ui",
    icon: <LayoutGrid className="w-6 h-6" />,
    position: "right",
    angle: 90,
    title: "UI/UX Design",
    description: "Designing intuitive experiences and beautiful interfaces.",
    skills: ["Figma", "User Research", "Wireframing", "Testing"],
  },
  {
    id: "performance",
    icon: <Zap className="w-6 h-6" />,
    position: "bottom",
    angle: 180,
    title: "Performance Optimization",
    description: "Optimizing web applications for speed and efficiency.",
    skills: ["Web Vitals", "Lazy Loading", "Code Splitting", "Caching"],
  },
  {
    id: "responsive",
    icon: <MonitorIcon className="w-6 h-6" />,
    position: "left",
    angle: 270,
    title: "Responsive Design",
    description: "Building websites that work across all screen sizes and devices.",
    skills: ["Mobile-First", "Adaptive", "Media Queries", "Testing"],
  },
]

const Wheel = () => {
  const [activeItem, setActiveItem] = useState(items[0])
  const [wheelRotation, setWheelRotation] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMediumScreen, setIsMediumScreen] = useState(false)
  const wheelRef = useRef(null)

  // Check if we're on a medium screen or larger
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 768) // 768px is the md breakpoint in Tailwind
    }

    // Initial check
    checkScreenSize()

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const calculateRotation = (clickedItem) => {
    return -clickedItem.angle
  }

  const handleItemClick = (item) => {
    if (isAnimating || item.id === activeItem.id) return

    setIsAnimating(true)
    const newRotation = calculateRotation(item)
    setWheelRotation(newRotation)
    setActiveItem(item)
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  const getIconPosition = (position) => {
    // Use different radius values based on screen size
    const wheelRadius = isMediumScreen ? 200 : 150 // 400px/2 for md, 300px/2 for default
    const iconSize = 50
    const offset = iconSize / 2

    switch (position) {
      case "top":
        return {
          top: `${-iconSize / 2}px`,
          left: `${wheelRadius - offset}px`,
        }
      case "right":
        return {
          top: `${wheelRadius - offset}px`,
          left: `${wheelRadius * 2 - iconSize / 2}px`,
        }
      case "bottom":
        return {
          top: `${wheelRadius * 2 - iconSize / 2}px`,
          left: `${wheelRadius - offset}px`,
        }
      case "left":
        return {
          top: `${wheelRadius - offset}px`,
          left: `${-iconSize / 2}px`,
        }
      default:
        return { top: 0, left: 0 }
    }
  }

  return (
    <div className="relative w-full h-[360px] md:h-[460px] flex items-center justify-center" ref={wheelRef}>
      <div className="glow-background-wheel absolute w-[300px] h-[300px] -z-10 md:w-[400px] md:h-[400px]"></div>

      <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-800/50 backdrop-blur-sm md:w-[400px] md:h-[400px]">
        <motion.div
          className="absolute w-full h-full rounded-full"
          animate={{ rotate: wheelRotation }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full bg-[#1a1a1a8c]/80 backdrop-blur-md flex flex-col items-center justify-center text-center gap-2 p-4 z-10 border border-gray-800/30 overflow-hidden md:w-[300px] md:h-[300px]"
        initial={{ opacity: 1 }}
        animate={{ opacity: [0.8, 1] }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <h2 className="text-sm md:text-base font-semibold text-white mb-1 line-clamp-1 w-full">{activeItem.title}</h2>
        <div className="w-10 h-0.5 bg-[#ff5e3a] rounded-full mb-2 md:w-12 md:mb-3"></div>
        <p className="text-gray-400 text-[12px] md:text-sm mb-2 line-clamp-3 w-full">{activeItem.description}</p>
        <div className="flex flex-wrap justify-center gap-1 md:gap-2 max-w-full">
          {activeItem.skills.map((skill, index) => (
            <span
              key={index}
              className="px-1.5 py-0.5 md:px-2 md:py-1 bg-black/30 text-[#ff5e3a] text-[11px] md:text-xs rounded-full whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
        animate={{ rotate: wheelRotation }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {items.map((item) => {
          const position = getIconPosition(item.position)

          return (
            <motion.div
              key={item.id}
              className={`absolute flex items-center justify-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg bg-[#1a1a1a8c]/80 backdrop-blur-md border border-gray-800/50 cursor-pointer
                         ${activeItem.id === item.id ? "text-[#ff5e3a]" : "text-gray-400"}`}
              style={{
                top: position.top,
                left: position.left,
                rotate: -wheelRotation,
              }}
              animate={{
                rotate: -wheelRotation,
                scale: activeItem.id === item.id ? 1.1 : 1,
                borderColor: activeItem.id === item.id ? "#613127" : "#333",
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleItemClick(item)}
              whileHover={{ scale: isAnimating ? 1 : 1.05 }}
            >
              {item.icon}
            </motion.div>
          )
        })}
      </motion.div>

      <style jsx global>{`
        .glow-background-wheel {
          background: radial-gradient(
            circle at center,
            #5e3227c1,
            rgba(0, 0, 0, 0) 70%
          );
          filter: blur(40px);
          animation: pulseGlow 5s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default Wheel
