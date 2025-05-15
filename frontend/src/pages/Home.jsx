import { Plus } from "lucide-react";
import Header from "../components/Header";
import Project from "../components/Project";
import Title from "../components/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [viewMore, setViewMore] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Title
        title="Featured Projects"
        paragraph="Explore a collection of my most significant work, showcasing my expertise in creating innovative digital solutions."
      />

      {/* Projects */}
      {[...Array(15)].slice(0, viewMore ? 10 : 5).map((_, index) => {
        return (
          <div className="lg:p-10">
            <Project
            key={index}
          idx={index}
          image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectCount={index + 1}
          title="Immersive Project"
          technologies={["Three.js", "React", "GSAP", "Tailwind"]}
          description="A cutting-edge portfolio website with 3D elements and smooth animations, showcasing creative work in an interactive experience."
          liveCode="https://example.com"
          sourceCode="https://example.com"
        />
          </div>
        );
      })}

      {
        viewMore ? <button
        onClick={() => navigate("/projects")}
        className="mx-auto bg-transparent flex items-center justify-center gap-3 border border-[#502921] py-2 px-4 rounded-lg text-xs text-[#fafafa] font-semibold hover:bg-[#211413] transition-all duration-200 cursor-pointer"
      >
        View All Projects{" "}
        <span className="border-[2px] rounded-full w-fit h-fit flex items-center justify-center">
          <Plus width={12} height={12} />
        </span>
      </button> : <button
          onClick={() => setViewMore(true)}
          className="mx-auto bg-transparent flex items-center justify-center gap-3 border border-[#502921] py-2 px-4 rounded-lg text-xs text-[#fafafa] font-semibold hover:bg-[#211413] transition-all duration-200 cursor-pointer"
        >
          View More Projects{" "}
          <span className="border-[2px] rounded-full w-fit h-fit flex items-center justify-center">
            <Plus width={12} height={12} />
          </span>
        </button>
      }
    </div>
  );
};

export default Home;
