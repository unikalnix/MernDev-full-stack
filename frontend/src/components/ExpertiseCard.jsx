import { useEffect } from "react";

const ExpertiseCard = ({ icon, title1, title2, paragraph, technologies }) => {
  return (
    <div className="border-[1px] border-[#322829] rounded-xl mx-5 p-5 mb-12 bg-[#1f1a1aaa]">
      <div className="flex items-center gap-4 mb-7">
        <span className="w-12 h-12 flex items-center justify-center bg-[#3E3434] rounded-xl">
          {icon}
        </span>
        <h1 className="text-xl text-[#fafafa] font-semibold">
          {title1} <br /> {title2}
        </h1>
      </div>
      <p className="text-[#a1a1aa] text-base mb-4">{paragraph}</p>
      <p className="text-[#fafafa] text-sm font-semibold mb-4">
        Skills & Technologies
      </p>
      <ul className="flex gap-3 flex-wrap">
        {technologies.map((tech, idx) => {
          return (
            <li
              className="text-[#f67655] text-xs font-semibold bg-[#352421] px-3 py-1 rounded-2xl"
              key={idx}
            >
              {tech}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpertiseCard;
