import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Wheel from "./Wheel/Wheel";
import Glow from "./Glow";

const Header = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Glow bg="#4a2c639b" left="0%" top="40%" mdLeft="10%" mdTop="10%" />
      <Glow bg="#7b4d2a84" left="-10%" top="50%" mdLeft="30%" mdTop="-10%" />

      <div className="mx-auto px-4 py-8 md:py-16 h-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 h-full">
          {/* Text Content Section */}
          <div className="flex flex-col items-start w-full md:w-1/2">
            <div className="relative bg-[#211413] w-fit px-8 py-1 rounded-2xl border border-[#613127] text-[#f77655] mb-6">
              <motion.span
                animate={{
                  scale: [0, 1, 3],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
                className="absolute left-4 top-3 rounded-full w-1.5 h-1.5 bg-[#f77655]"
              ></motion.span>
              <h1 className="text-[14px]">Available for projects</h1>
            </div>

            <h1 className="text-[#fafafa] text-[28px] md:text-[72px] leading-tight md:leading-none font-semibold mb-4">
              Creating digital experiences that inspire
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#a1a1aa] mb-6">
              I craft immersive digital experiences that blend creative design
              with cutting-edge technology. Every project is an opportunity to
              create something truly unique.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <button className="cursor-pointer relative px-6 py-2.5 rounded-3xl text-white text-[14px] font-semibold overflow-hidden border-2 border-transparent z-10  w-full sm:w-auto">
                <span className="relative z-20">Let's Collaborate</span>
                <span className="absolute inset-[-1px] rounded-3xl bg-[linear-gradient(_#DB6E55,_#360e36)]"></span>
                <span className="absolute inset-[1px] bg-black rounded-3xl"></span>
              </button>

              <button className="cursor-pointer px-6 py-2.5 rounded-3xl flex items-center justify-center gap-2 bg-[#242325] text-[14px] font-semibold hover:bg-[#3C3B3D] transition-all duration-200  z-50 w-full sm:w-auto">
                View Projects <ArrowDown size={15} />
              </button>
            </div>
          </div>

          {/* Wheel Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
            <Wheel />
          </div>
        </div>
      </div>
      {/* Scroll to explore */}
      <div className="flex items-center justify-center">
        <button className="cursor-pointer outline-none border-none  group text-[14px] text-[#a1a1aa] hover:text-[#f67655] transition-all duration-200 flex flex-col justify-center items-center">
          Scroll to explore <br />
          <span className="animate-bounce mt-3 border-2 border-[#a1a1aa] rounded-full group-hover:border-[#f67655] transition-all duration-200">
            <ArrowDown className="p-1" strokeWidth={3} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
