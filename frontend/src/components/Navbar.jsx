import { X, Menu, Sun } from "lucide-react";
import { useState } from "react";
import { navItems } from "../assets/data";
import Menubar from "./Menubar";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menubarOpen, setMenubarOpen] = useState(false);
  const closeMenubar = () => setMenubarOpen(false);

  return (
    <>
      <nav className="px-4 py-2 w-full min-h-20 flex items-center justify-between backdrop-blur-md sticky top-0 z-20">
        <h1 className="text-[#CACACA] font-semibold text-[24px] relative w-fit cursor-pointer">
          Portfolio
          <span className="absolute top-0 right-0 w-[5px] h-[5px] rounded-full bg-[#f67655]"></span>
        </h1>
        <ul className="sm:flex gap-4 hidden">
          {navItems
            ? navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setActive(item.id);
                      const section = document.getElementById(item.id);
                      if (section) {
                        console.log(section.id);
                        if (section.id === "home") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className={` ${
                      active === item.id ? "text-[#f67655]" : "text-[#CACACA]"
                    } text-[14px] ${
                      active === item.id
                        ? "hover:text-[#f67655]"
                        : "hover:text-[#ffffff]"
                    } cursor-pointer transition-all duration-200 relative before:content-[''] before:absolute before:bottom-0 before:w-0 before:h-[2px] before:bg-[#f67655] before:transition-all before:duration-500 hover:before:w-full`}
                  >
                    {item.label}
                  </li>
                );
              })
            : null}
        </ul>
        <div className="flex items-center gap-4">
          <Sun
            className="cursor-pointer rounded-full p-3 backdrop-blur-2xl bg-[#2D201E]  hover:bg-[#422923] hover:scale-120 transition-all duration-200"
            width={45}
            height={45}
          />

          {menubarOpen ? (
            <X
              onClick={() => setMenubarOpen((prev) => !prev)}
              className="cursor-pointer block sm:hidden rounded-full p-3 backdrop-blur-2xl bg-[#161617]  hover:bg-[#422923] hover:scale-120 transition-all duration-200"
              width={45}
              height={45}
              rotate={45}
            />
          ) : (
            <Menu
              onClick={() => setMenubarOpen((prev) => !prev)}
              className="cursor-pointer block sm:hidden rounded-full p-3 backdrop-blur-2xl bg-[#161617]  hover:bg-[#422923] hover:scale-120 transition-all duration-200"
              width={45}
              height={45}
            />
          )}
        </div>
      </nav>

      {menubarOpen && (
        <Menubar
          closeMenubar={closeMenubar}
          active={active}
          setActive={setActive}
        />
      )}
    </>
  );
};

export default Navbar;
