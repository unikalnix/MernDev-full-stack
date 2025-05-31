import { ArrowRight, ChevronLeft, ChevronRight, Github, X } from "lucide-react";
import { useEffect, useState } from "react";

const ProjectCard = ({
  idx,
  images,
  projectCount,
  title,
  technologies,
  description,
  liveCode,
  sourceCode,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openImages, setOpenImages] = useState(false);
  const moveLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const moveRight = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    if (openImages) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openImages]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!openImages) return;

      if (e.key === "ArrowLeft") {
        moveLeft();
      } else if (e.key === "ArrowRight") {
        moveRight();
      } else if (e.key === "Escape") {
        setOpenImages(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openImages, moveLeft, moveRight]);

  return (
    <>
      <div
        className={`px-4 flex flex-col items-start mb-12 ${
          idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } md:gap-8 lg:mb-0`}
      >
        <div
          onClick={() => setOpenImages(true)}
          className="relative overflow-hidden w-full h-[250px] mb-8 lg:w-[1000px] lg:h-[350px] group flex-1"
        >
          <div className="absolute right-3 top-3 flex items-center justify-between gap-2 md:gap-4 md:p-2 z-[500]">
            <span
              onClick={(e) => {
                e.stopPropagation();
                moveLeft();
              }}
              className="select-none cursor-pointer bg-[#14141689] hover:bg-[#141416] transition-all duration-200 rounded-full p-1.5 md:p-3"
            >
              <ChevronLeft />
            </span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                moveRight();
              }}
              className="select-none cursor-pointer bg-[#14141689] hover:bg-[#141416] transition-all duration-200 rounded-full p-1.5 md:p-3"
            >
              <ChevronRight />
            </span>
          </div>
          <img
            className="w-full lg:w-full lg:h-full h-full object-cover object-top group-hover:scale-110 transition-all duration-200"
            src={images[currentIndex]}
            alt={title}
          />
          {/* Layer */}
          <div className="w-full h-full bg-black opacity-40 z-50 absolute top-0"></div>{" "}
        </div>
        <div className="flex-1">
          <h1 className="font-jetbrains text-[#a1a1aa] text-sm mb-3 lg:mb-5">
            Project {projectCount < 10 ? `0${projectCount}` : projectCount}
          </h1>
          <h1 className="text-[#fafafa] text-3xl font-semibold mb-4 lg:mb-6">
            {title}
          </h1>
          <ul className="flex flex-wrap items-center gap-3 text-xs font-normal mb-4 lg:mb-6">
            {String(technologies)
              .split(",")
              .map((tech, index) => {
                return (
                  <li
                    className="bg-[#161617] border border-[#2E2E2F] px-2.5 py-1 rounded-2xl"
                    key={index}
                  >
                    {tech}
                  </li>
                );
              })}
          </ul>
          <p className="text-[#a1a1aa] text-base mb-3 lg:mb-5">{description}</p>
          <div className="flex items-center gap-4">
            <a
              className="flex items-center justify-center gap-2 text-[#a1a1aa] hover:text-[#fafafa] text-sm font-semibold transition-all duration-200 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-[#f67655] hover:before:w-full before:transition-all before:duration-500"
              href={`${liveCode}`}
              target="_blank"
            >
              View Live
              <span className="-rotate-45">
                <ArrowRight width={15} />
              </span>
            </a>
            <a
              className="flex items-center justify-center gap-2 text-[#a1a1aa] hover:text-[#fafafa] text-sm font-semibold transition-all duration-200 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-[#f67655] hover:before:w-full before:transition-all before:duration-500"
              href={`${sourceCode}`}
              target="_blank"
            >
              Source Code <Github width={15} />
            </a>
          </div>
        </div>
      </div>

      {openImages && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          <div className="relative w-full h-full md:w-[90vw] md:max-w-5xl md:h-[80vh] rounded-lg overflow-hidden shadow-xl">
            {/* Close Button */}
            <button
              className="absolute md:top-0 top-[10px] right-[10px] z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white"
              onClick={() => setOpenImages(false)}
            >
              <X />
            </button>

            {/* Left Arrow */}
            <button
              className="absolute top-1/2 left-[10px] transform -translate-y-1/2 z-10 bg-[#525253] hover:bg-[#212121] cursor-pointer p-2 rounded-full text-white"
              onClick={moveLeft}
            >
              <ChevronLeft />
            </button>

            {/* Right Arrow */}
            <button
              className="absolute top-1/2 right-[10px] transform -translate-y-1/2 z-10 bg-[#525253] hover:bg-[#212121] cursor-pointer p-2 rounded-full text-white"
              onClick={moveRight}
            >
              <ChevronRight />
            </button>

            {/* Image */}
            <img
              src={images[currentIndex]}
              alt={`Project Image ${currentIndex + 1}`}
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
