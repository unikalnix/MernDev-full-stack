import { ArrowRightIcon, Code, Plus, Timer } from "lucide-react";
import Header from "../components/Header";
import Title from "../components/Title";
import { createRef, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ExpertiseCard from "../components/ExpertiseCard";
import Glow from "../components/Glow";
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const [viewMore, setViewMore] = useState(false);
  const refs = useRef([...Array(3)].map(() => createRef()));
  const navigate = useNavigate();

  return (
    <div id="home">
      <Header />
      <div id="projects">
        <Title
          title="Featured Projects"
          paragraph="Explore a collection of my most significant work, showcasing my expertise in creating innovative digital solutions."
        />

        {/* Projects */}
        {[...Array(15)].slice(0, viewMore ? 10 : 5).map((_, index) => {
          return (
            <div key={index} className="lg:p-10">
              <ProjectCard
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
      </div>

      {viewMore ? (
        <button
          onClick={() => navigate("/projects")}
          className="mx-auto bg-transparent flex items-center justify-center gap-3 border border-[#502921] py-2 px-4 rounded-lg text-xs text-[#fafafa] font-semibold hover:bg-[#211413] transition-all duration-200 cursor-pointer"
        >
          View All Projects{" "}
          <span className="border-[2px] rounded-full w-fit h-fit flex items-center justify-center">
            <Plus width={12} height={12} />
          </span>
        </button>
      ) : (
        <button
          onClick={() => setViewMore(true)}
          className="mx-auto bg-transparent flex items-center justify-center gap-3 border border-[#502921] py-2 px-4 rounded-lg text-xs text-[#fafafa] font-semibold hover:bg-[#211413] transition-all duration-200 cursor-pointer"
        >
          View More Projects{" "}
          <span className="border-[2px] rounded-full w-fit h-fit flex items-center justify-center">
            <Plus width={12} height={12} />
          </span>
        </button>
      )}

      {/* Expertise Section */}
      <div
      id="expertise"
        style={{
          backgroundImage: `linear-gradient(to bottom, #140E0F 30%, transparent 100%)`,
        }}
        className="mt-12 p-2 relative overflow-hidden"
      >
        <Title
          title="My Expertise"
          paragraph="I specialize in creating exceptional digital experiences through a combination of technical skills and creative vision."
        />
        <Glow bg="#7b4d2a" left="20%" top="65%" mdLeft="0%" mdTop="30%" />
        <Glow bg="#4a2c63" left="0%" top="80%" mdLeft="60%" mdTop="25%" />
        <div className={`md:grid md:grid-cols-3`}>
          {[...Array(6)].map((_, idx) => {
            return (
              <div
                key={idx}
                className={`${
                  idx % 2 === 0 ? "" : idx % 2 === 1 ? "mt-6" : "mt-12"
                }`}
              >
                <ExpertiseCard
                  icon={<Code stroke="#f67655" />}
                  title1="Front-End"
                  title2="Development"
                  paragraph="Creating responsive, accessible, and performant user interfaces with
        modern frameworks and best practices."
                  technologies={[
                    "React",
                    "Tailwind CSS",
                    "Next.js",
                    "TypeScript",
                    "Framer Motion",
                    "Redux Toolkit",
                  ]}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Work Experience */}
      <div id="experience">
        <Title
          title="Work Experience"
          paragraph="My professional journey has equipped me with a diverse skill set and a deep understanding of creating exceptional digital products."
        />
        <div className="min-h-screen p-5 md:px-52 ml-6 flex flex-col gap-10 overflow-hidden">
          {[...Array(3)].map((_, idx) => {
            const { scrollYProgress } = useScroll({
              target: refs.current[idx],
              offset: ["start end", "start center"],
            });

            const x = useTransform(
              scrollYProgress,
              [0, 1],
              [100, window.innerWidth <= 768 ? 10 : 50]
            );
            return (
              <motion.div
                ref={refs.current[idx]}
                style={{ x }}
                key={idx}
                className="relative before:block before:content-[''] before:absolute before:-left-6 before:top-0 before:w-[1.5px] before:h-full before:bg-gradient-to-b before:from-[#f67655]/70 before:to-[#f67655]/10 before:rounded-md after:block after:content-[''] after:absolute after:-left-7 after:top-0 after:w-[10px] after:h-[10px] after:rounded-full after:bg-[#f67655]"
              >
                <div className="flex items-center gap-2 bg-[#211413] w-fit py-1 px-3 rounded-2xl text-[#f67655] text-sm font-semibold mb-6">
                  <span>
                    <Timer strokeWidth={3} width={17} />
                  </span>
                  <h5>2025 - Present</h5>
                </div>
                <h1 className="text-2xl text-[#fafafa] font-semibold mb-1">
                  Full Stack Developer
                </h1>
                <p className="text-base text-[#f67655] mb-6">
                  Ecommerce Web App (Peronsal Project)
                </p>
                <p className="text-base text-[#a1a1aa] mb-6">
                  Built a fully functional e-commerce site with category
                  filtering, cart system, product pages, and WhatsApp order
                  integration using HTML, CSS, JavaScript, and Firebase.
                </p>
                <h2 className="text-sm font-semibold text-[#fafafa] mb-4">
                  Key Achievements
                </h2>
                <div className="flex flex-col gap-4">
                  {/* 1 achievement */}
                  <div className="flex gap-3">
                    <span className="text-[#f67655]">
                      <ArrowRightIcon width={15} />
                    </span>
                    <p>
                      Designed a dynamic product and cart system across multiple
                      pages
                    </p>
                  </div>
                  {/* 2 achievement */}
                  <div className="flex gap-3">
                    <span className="text-[#f67655]">
                      <ArrowRightIcon width={15} />
                    </span>
                    <p>
                      Designed a dynamic product and cart system across multiple
                      pages
                    </p>
                  </div>
                  {/* 3 achievement */}
                  <div className="flex gap-3">
                    <span className="text-[#f67655]">
                      <ArrowRightIcon width={15} />
                    </span>
                    <p>
                      Designed a dynamic product and cart system across multiple
                      pages
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
