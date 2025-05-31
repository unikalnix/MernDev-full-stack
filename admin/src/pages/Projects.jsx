import { EditIcon, Plus, PlusIcon, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { useLocation, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(null);
  const [projects, setProjects] = useState([]);
  const [addProject, setAddProject] = useState(false);
  const [updateProject, setUpdateProject] = useState(false);
  const [fileNames, setFileNames] = useState([]);
  const [data, setData] = useState({
    title: "",
    status: "",
    description: "",
    previewUrl: "",
    codeUrl: "",
    technologies: "",
    images: [],
    whatsNew: "",
  });

  const onChangeHandler = (e) => {
    if (e.target.name === "images") {
      const images = Array.from(e.target.files);
      const fileNames = images.map((file) => file.name);
      setFileNames(fileNames);
      setData((prev) => ({ ...prev, images: [...images] }));
    }

    if (e.target.name === "technologies") {
      const technologies = e.target.value;
      setData((prev) => ({ ...prev, technologies }));
    }

    if (e.target.name !== "images" && e.target.name !== "technologies") {
      const name = e.target.name;
      const value = e.target.value;
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addProjectFunc = async (id, e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("status", data.status);
    formData.append("technologies", data.technologies);
    formData.append("previewUrl", data.previewUrl);
    formData.append("codeUrl", data.codeUrl);
    formData.append("whatsNew", data.whatsNew);
    data.images.forEach((image) => formData.append("images", image));

    try {
      let res;
      if (addProject) {
        res = await axiosInstance.post("/api/projects/add", formData);
      } else {
        res = await axiosInstance.put(`/api/projects/update/${id}`, formData);
      }
      if (res.data.ok) {
        setAddProject(false);
        setUpdateProject(false);
        setData({
          title: "",
          status: "",
          description: "",
          previewUrl: "",
          codeUrl: "",
          technologies: "",
          images: [],
          whatsNew: "",
        });
        setFileNames([]);
        fetchProjects();
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await axiosInstance.get("/api/projects/list");
      if (res.data.ok) {
        setProjects(res.data.projects);
      } else {
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteProject = async (id) => {
    try {
      const res = await axiosInstance.delete(`/api/projects/delete/${id}`);
      if (res.data.ok) {
        fetchProjects();
      } else {
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const getProject = async (id) => {
    try {
      const res = await axiosInstance.get(`/api/projects/list/${id}`);
      if (res.data.ok) {
        setData({
          title: res.data.project.title || "",
          status: res.data.project.status || "",
          description: res.data.project.description || "",
          previewUrl: res.data.project.previewUrl || "",
          codeUrl: res.data.project.codeUrl || "",
          technologies: res.data.project.technologies || "",
          images: res.data.project.images || [],
          whatsNew: res.data.project.whatsNew || "",
        });
        setUpdateProject(true);
      } else {
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {}, [data]);

  useEffect(() => {}, [projects]);

  useEffect(() => {}, [id]);

  return (
    <div className="bg-black min-h-screen px-[10px] py-6 text-white">
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-2xl">Projects</h1>
        <button
          onClick={() => setAddProject(true)}
          className="flex items-center justify-between border-none cursor-pointer px-3 py-2 rounded-md transition-all duration-200 bg-[#E75635] hover:bg-[#e75635d7]"
        >
          <PlusIcon />
          Add New Project
        </button>
      </div>

      {/* Add project */}
      {(addProject || updateProject) && (
        <div className="w-full border border-[#1E2939] p-3 rounded-md mb-4 bg-[#1A1A1A]">
          <h1 className="text-xl font-bold mb-4">Add New Project</h1>
          <form
            onSubmit={(e) => addProjectFunc(id, e)}
            encType="multipart/form-data"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-col w-1/2">
                <label className="text-[#99A1AF] mb-2" htmlFor="title">
                  Project Title
                </label>
                <input
                  onChange={onChangeHandler}
                  className="w-full bg-[#1E2939] h-12 px-2 rounded-md focus:border focus:border-[#FF5E3A] outline-none"
                  type="text"
                  name="title"
                  placeholder="Enter project Title"
                  value={data.title}
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label className="text-[#99A1AF] mb-2" htmlFor="status">
                  Status
                </label>
                <select
                  onChange={onChangeHandler}
                  className="w-full bg-[#1E2939] h-12 px-2 rounded-md focus:border focus:border-[#FF5E3A] outline-none"
                  name="status"
                  value={data.status}
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-[#99A1AF]" htmlFor="description">
                Description
              </label>
              <textarea
                onChange={onChangeHandler}
                className="w-full min-h-36 bg-[#1E2939] h-12 px-2 rounded-md focus:border focus:border-[#FF5E3A] outline-none py-2 mt-2"
                name="description"
                value={data.description}
              ></textarea>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-col w-1/2">
                <label className="text-[#99A1AF] mb-2" htmlFor="previewUrl">
                  Preview URL
                </label>
                <input
                  onChange={onChangeHandler}
                  className="bg-[#1E2939] h-12 px-2 rounded-md focus:border focus:border-[#FF5E3A] outline-none"
                  type="text"
                  name="previewUrl"
                  placeholder="https://example.com"
                  value={data.previewUrl}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-[#99A1AF] mb-2" htmlFor="codeUrl">
                  Code URL
                </label>
                <input
                  onChange={onChangeHandler}
                  className="bg-[#1E2939] h-12 px-2 rounded-md focus:border focus:border-[#FF5E3A] outline-none"
                  type="text"
                  name="codeUrl"
                  placeholder="https://github.com/username/project"
                  value={data.codeUrl}
                />
              </div>
            </div>

            {updateProject && (
              <div className="mb-4 flex flex-col">
                <label className="text-[#99A1AF] mb-2" htmlFor="technologies">
                  What's New
                </label>
                <input
                  onChange={onChangeHandler}
                  className="bg-[#1E2939] h-12 px-2 rounded-md focus:border focus:border-[#FF5E3A] outline-none"
                  type="text"
                  name="whatsNew"
                  placeholder="Whats new in this project"
                  value={data.whatsNew}
                />
              </div>
            )}

            <div className="mb-4 flex flex-col">
              <label className="text-[#99A1AF] mb-2" htmlFor="technologies">
                Technologies (comma separated)
              </label>
              <input
                onChange={onChangeHandler}
                className="bg-[#1E2939] h-12 px-2 rounded-md focus:border focus:border-[#FF5E3A] outline-none"
                type="text"
                name="technologies"
                placeholder="React, Tailwind etc"
                value={data.technologies || ""}
              />
            </div>

            <div className="mb-4 flex flex-col">
              <h1 className="text-[#99A1AF] mb-2" htmlFor="images">
                Project images
              </h1>
              <label className="border-2 border-dashed border-gray-300 w-32 h-32 flex items-center justify-center rounded-lg cursor-pointer hover:border-[#E95837] transition-all duration-200">
                <Plus className="text-gray-400 w-10 h-10" />
                <input
                  onChange={onChangeHandler}
                  type="file"
                  name="images"
                  className="hidden"
                  multiple
                  accept="images/*"
                />
              </label>

              {/* Selected image names */}
              <div className="mt-2">
                {fileNames.length > 0 ? (
                  <ul className="list-disc list-inside text-sm text-gray-400">
                    {fileNames.map((name, index) => (
                      <li key={index}>{name}</li>
                    ))}
                  </ul>
                ) : (
                  // https://res.cloudinary.com/die6ljajx/image/upload/v1746297766/mern-dev-projects-folder/beige_printed_female_bottomwear_ckruah.jpg
                  <ul className="list-disc list-inside text-sm text-gray-400">
                    {data.images.map((name, index) => (
                      <li key={index}>
                        {name.split("/").pop().split("_")[0] +
                          "." +
                          name.split("/").pop().split(".").pop()}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <input
                className="bg-[#E95837] py-2 px-3 rounded-md hover:bg-[#e95837bb] cursor-pointer transition-all duration-200"
                type="submit"
                value={
                  loading
                    ? addProject
                      ? "Adding..."
                      : "Updating..."
                    : addProject
                    ? "Add Project"
                    : "Update Project"
                }
                disabled={loading}
              />
              <button
                onClick={() => {
                  setAddProject(false);
                  setUpdateProject(false);
                }}
                className="px-3 py-2 rounded-md cursor-pointer bg-[#1E2939] hover:bg-[#1e2939c0] transition-all duration-200 "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Project Cards */}
      {projects.length > 0 ? (
        projects.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full min-h-50 border border-[#1E2939] rounded-md p-3 bg-[#1A1A1A] mb-4"
            >
              <div className="flex justify-between mb-4">
                <div>
                  <h1 className="text-xl font-bold relative w-fit mb-2">
                    {project.title}
                    <span
                      className={`font-light text-[12px] ml-4 ${
                        project.status === "published"
                          ? "bg-[#153D25]"
                          : "bg-[#453815]"
                      } ${
                        project.status === "published"
                          ? "text-[#00C951]"
                          : "text-[#F0B100]"
                      } px-[10px] py-[2px] rounded-xl`}
                    >
                      {project.status}
                    </span>
                  </h1>
                  <p className="text-[#99A1AF] select-none">
                    {show === index
                      ? project.description
                      : project.description.slice(0, 100)}
                    {show !== index && "..."}
                    {project.description.length > 100 && (
                      <span
                        onClick={() =>
                          setShow((prev) => (prev === index ? null : index))
                        }
                        className="hover:text-[#C54C3A] text-white transition-all duration-200 cursor-pointer ml-4"
                      >
                        View {show !== null ? "less" : "more"}
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex gap-3">
                  <EditIcon
                    onClick={() => {
                      getProject(project._id);
                      navigate(`/project/${project._id}`);
                    }}
                    width={40}
                    height={40}
                    className="p-2 bg-[#1E2939] transition-all duration-200 text-[#99A1AF] hover:text-white rounded-md cursor-pointer select-none"
                  />
                  <Trash
                    onClick={() => deleteProject(project._id)}
                    width={40}
                    height={40}
                    className="p-2 bg-[#1E2939] transition-all duration-200 text-[#99A1AF] hover:text-white rounded-md cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex mb-4 gap-3 w-full overflow-auto">
                {project.images.map((image, i) => {
                  return (
                    <img
                      key={i}
                      className="w-[200px] h-[160px] object-cover select-none"
                      src={image}
                      alt=""
                      draggable="false"
                    />
                  );
                })}
              </div>

              <ul className="flex gap-3 mb-4 flex-wrap">
                {String(project.technologies)
                  .split(", ")
                  .map((tech, i) => {
                    return (
                      <li
                        key={i}
                        className="text-[12px] bg-[#1E2939] py-[3px] px-[10px] rounded-md text-[#D1D5DC]"
                      >
                        {tech}
                      </li>
                    );
                  })}
              </ul>

              <div className="mb-4 flex gap-4">
                <button
                  onClick={() => window.open(project.previewUrl, "_blank")}
                  className="text-[14px] bg-[#E75635] px-3 py-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-[#e75635b2]"
                >
                  Live Preview
                </button>
                <button
                  onClick={() => window.open(project.codeUrl, "_blank")}
                  className="text-[14px] bg-[#1E2939] px-3 py-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-[#364153]"
                >
                  View Code
                </button>
              </div>

              <hr className="border-none bg-[#1E2939] h-[1px] mb-4" />

              <div className="flex items-start justify-between gap-5">
                <p className="text-[14px] text-[#99A1AF] w-full">
                  Last Updated:{" "}
                  <span className="text-[16px] text-white">
                    {new Date(project.updatedAt).toLocaleString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </p>
                {project?.whatsNew && (
                  <div className="custom-scrollbar bg-[#1E2939] p-3 rounded-md text-[14px] max-w-[250px] overflow-auto md:max-w-[450px] lg:max-w-[650px]">
                    <h1 className="text-[#FF5E3A]">What's New:</h1>
                    <p>{project.whatsNew}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Projects;
