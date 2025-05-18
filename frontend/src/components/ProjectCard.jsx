import { ArrowRight, Github } from "lucide-react";

const ProjectCard = ({
  idx,
  image,
  projectCount,
  title,
  technologies,
  description,
  liveCode,
  sourceCode,
}) => {
  return (
    
      <div
        className={`px-4 flex flex-col items-center justify-between mb-12 ${
          idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } md:items-start md:gap-8 lg:mb-0`}
      >
        <div className="relative overflow-hidden w-full h-[250px] mb-8 lg:w-[1000px] lg:h-[350px] group">
          <img
            className="w-full lg:w-full lg:h-full h-full object-cover group-hover:scale-110 transition-all duration-200"
            src={image}
            alt={title}
          />
          <div className="w-full h-[250px] bg-black opacity-40 z-50 absolute top-0 lg:w-[1000px] lg:h-[400px]"></div>{" "}
          {/* Layer */}
        </div>
        <div>
          <h1 className="font-jetbrains text-[#a1a1aa] text-sm mb-3 lg:mb-5">
            Project {projectCount < 10 ? `0${projectCount}` : projectCount}
          </h1>
          <h1 className="text-[#fafafa] text-3xl font-semibold mb-4 lg:mb-6">
            {title}
          </h1>
          <ul className="flex items-center gap-3 text-xs font-normal mb-4 lg:mb-6">
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
    
  );
};

export default ProjectCard;
