import { navItems } from "../assets/data.jsx";

const Menubar = ({ closeMenubar, activeSection }) => {
   const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.getElementById('navbar').clientHeight;
    if(section){
      const offset = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({behavior:'smooth', top: offset})
    }
    closeMenubar();
  };
  return (
    <div className="backdrop-blur-2xl min-h-[300px] flex fixed right-0 left-0 z-60">
      <ul className="flex flex-col gap-4 w-full p-4">
        {navItems.length > 0
          ? navItems.map((item, index) => {
              return (
                <li
                  onClick={() => scrollToSection(item.id)}
                  key={index}
                  className={`${
                    activeSection === item.id && "bg-[#3A1E18] text-[#f67655]"
                  } px-3 py-2  rounded-md`}
                >
                  {item.label}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Menubar;
