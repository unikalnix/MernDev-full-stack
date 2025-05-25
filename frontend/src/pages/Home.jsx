import { ArrowRightIcon, Code, Plus, Timer } from "lucide-react";
import Header from "../components/Header";
import Title from "../components/Title";
import { createRef, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ExpertiseCard from "../components/ExpertiseCard";
import Glow from "../components/Glow";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Contact from "../components/Contact";
import axios from "axios";
import { expertise, experience } from "../assets/data.jsx";

const Home = ({ setActiveSection }) => {
  const [projects, setProjects] = useState([]);
  const [viewMore, setViewMore] = useState(false);
  const experienceRefs = useRef(experience.map(() => createRef()));
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const projectRef = useRef(null);
  const expertiseRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { amount: 0.1 });
  const isProjectInView = useInView(projectRef, { amount: 0.1 });
  const isExpertiseInView = useInView(expertiseRef, { amount: 0.1 });
  const isExperienceInView = useInView(experienceRef, { amount: 0.1 });
  const isContactInView = useInView(contactRef, { amount: 0.1 });

  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/projects/client/list`
      );
      if (res.data.ok) {
        setProjects(res.data.projects);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      throw new Error("An error occured: " + error.message);
    }
  };

  useEffect(() => {}, [projects]);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (isHeaderInView) {
      // console.log("Active section: Header");
      setActiveSection("home");
    } else if (isProjectInView) {
      // console.log("Active section: Projects");
      setActiveSection("projects");
    } else if (isExpertiseInView) {
      // console.log("Active section: Expertise");
      setActiveSection("expertise");
    } else if (isExperienceInView) {
      // console.log("Active section: Experience");
      setActiveSection("experience");
    } else if (isContactInView) {
      // console.log("Active section: Contact");
      setActiveSection("contact");
    }
  }, [
    isHeaderInView,
    isProjectInView,
    isExpertiseInView,
    isExperienceInView,
    isContactInView,
  ]);

  return (
    <div id="home">
      <div id="header" ref={headerRef}>
        <Header />
      </div>
      <div id="projects" ref={projectRef}>
        <Title
          title="Featured Projects"
          paragraph="Explore a collection of my most significant work, showcasing my expertise in creating innovative digital solutions."
        />

        {/* Projects */}
        {projects.length > 0 &&
          projects.slice(0, viewMore ? 10 : 5).map((project, index) => {
            return (
              <div key={index} className="lg:p-10">
                <ProjectCard
                  idx={index}
                  images={project.images}
                  projectCount={index + 1}
                  title={project.title}
                  technologies={project.technologies}
                  description={project.description}
                  liveCode={project.previewUrl}
                  sourceCode={project.codeUrl}
                />
              </div>
            );
          })}

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
      </div>

      {/* Expertise Section */}
      <div
        id="expertise"
        ref={expertiseRef}
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
          {expertise.map((exp, idx) => {
            return (
              <div
                key={idx}
                className={`${
                  idx % 2 === 0 ? "" : idx % 2 === 1 ? "mt-6" : "mt-12"
                }`}
              >
                <ExpertiseCard
                  icon={exp.icon}
                  title1={exp.title1}
                  title2={exp.title2}
                  paragraph={exp.paragraph}
                  technologies={exp.technologies}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Work Experience */}
      <div id="experience" ref={experienceRef}>
        <Title
          title="Work Experience"
          paragraph="My professional journey has equipped me with a diverse skill set and a deep understanding of creating exceptional digital products."
        />
        <div className="min-h-screen p-5 md:px-52 ml-6 flex flex-col gap-10 overflow-hidden">
          {experience.map((exp, idx) => {
            const { scrollYProgress } = useScroll({
              target: experienceRefs.current[idx],
              offset: ["start end", "start center"],
            });

            const x = useTransform(
              scrollYProgress,
              [0, 1],
              [100, window.innerWidth <= 768 ? 10 : 50]
            );
            return (
              <motion.div
                ref={experienceRefs.current[idx]}
                style={{ x }}
                key={idx}
                className="relative before:block before:content-[''] before:absolute before:-left-6 before:top-0 before:w-[1.5px] before:h-full before:bg-gradient-to-b before:from-[#f67655]/70 before:to-[#f67655]/10 before:rounded-md after:block after:content-[''] after:absolute after:-left-7 after:top-0 after:w-[10px] after:h-[10px] after:rounded-full after:bg-[#f67655]"
              >
                <div className="flex items-center gap-2 bg-[#211413] w-fit py-1 px-3 rounded-2xl text-[#f67655] text-sm font-semibold mb-6">
                  <span>
                    <Timer strokeWidth={3} width={17} />
                  </span>
                  <h5>{exp.date}</h5>
                </div>
                <h1 className="text-2xl text-[#fafafa] font-semibold mb-1">
                  {exp.role}
                </h1>
                <p className="text-base text-[#f67655] mb-6">
                  {exp.projectTitle}
                </p>
                <p className="text-base text-[#a1a1aa] mb-6">
                  {exp.description}
                </p>
                <h2 className="text-sm font-semibold text-[#fafafa] mb-4">
                  Key Achievements
                </h2>
                <div className="flex flex-col gap-4">
                  {exp.keyAchievements.map((key, index) => {
                    return (
                      <div key={index} className="flex gap-3">
                        <span className="text-[#f67655]">
                          <ArrowRightIcon width={15} />
                        </span>
                        <p>{key}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Contact section */}
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
