import projectModel from "../models/project.js";
import { v2 as cloudinary } from "cloudinary";

const projectsList = async (req, res) => {
  try {
    const projects = await projectModel.find();
    return res.json({
      ok: true,
      message: "Projects found",
      projects,
    });
  } catch (error) {
    return res.json({
      ok: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const projectAdd = async (req, res) => {
  try {
    const { title, description, status, technologies, previewUrl, codeUrl } =
      req.body;

    if (!req.files || !req.files.images) {
      return res.json({ ok: false, message: "Images are required" });
    }
    let imageUrls = [];
    for (const image of req.files.images) {
      const res = await cloudinary.uploader.upload(image.path, {
        folder: "mern-dev-projects-folder",
        use_filename: true,
        unique_filename: true,
      });
      imageUrls.push(res.secure_url);
    }

    if (
      !title ||
      !description ||
      !status ||
      !technologies ||
      !previewUrl ||
      !codeUrl
    ) {
      return res.json({ ok: false, message: "All fields are required" });
    }

    const project = await projectModel.create({
      title,
      description,
      images: imageUrls,
      status,
      technologies,
      previewUrl,
      codeUrl,
    });

    return res.json({
      ok: true,
      message: "Project added successfully",
      project,
    });
  } catch (error) {
    return res.json({
      ok: false,
      message: error.message,
    });
  }
};

const projectUpdate = async (req, res) => {
  const id = req.params.id;
  try {
    const {
      title,
      status,
      description,
      whatsNew,
      technologies,
      previewUrl,
      codeUrl,
    } = req.body;
    let updatedImageUrls = [];

    if (req.files && req.files.images) {
      for (const image of req.files.images) {
        const res = await cloudinary.uploader.upload(image.path, {
          folder: "mern-dev-projects-folder",
          use_filename: true,
          unique_filename: true,
        });
        updatedImageUrls.push(res.secure_url);
      }
    }

    const project = await projectModel.findById(id);
    if (!project) {
      return res.json({
        ok: false,
        message: "Project not found",
      });
    }

    project.title = title || project.title;
    project.status = status || project.status;
    project.description = description || project.description;
    project.images =
      updatedImageUrls.length > 0
        ? [...project.images, ...updatedImageUrls]
        : project.images;
    project.whatsNew = whatsNew || project.whatsNew;
    project.technologies = technologies || project.technologies; // Save as string directly
    project.previewUrl = previewUrl || project.previewUrl;
    project.codeUrl = codeUrl || project.codeUrl;
    project.updatedAt = Date.now();

    await project.save();

    return res.json({
      ok: true,
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    return res.json({
      ok: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const projectList = async (req, res) => {
  const id = req.params.id;
  try {
    const project = await projectModel.findById(id);
    if (!project) {
      return res.json({
        ok: false,
        message: "Project not found",
      });
    }

    return res.json({
      ok: true,
      message: "Project found",
      project,
    });
  } catch (error) {
    return res.json({
      ok: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const projectDelete = async (req, res) => {
  const id = req.params.id;
  try {
    const project = await projectModel.findByIdAndDelete({ _id: id });
    if (!project) {
      return res.json({
        ok: false,
        message: "Project not found or already deleted",
      });
    }

    return res.json({
      ok: true,
      message: "Project deleted successfully",
      project,
    });
  } catch (error) {
    return res.json({
      ok: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const projectsDelete = async (req, res) => {
  try {
    const projects = await projectModel.deleteMany();
    return res.json({ ok: true, message: "Deleted All Projects", projects });
  } catch (error) {
    return res.json({ ok: false, message: error.message });
  }
};

export {
  projectsList,
  projectAdd,
  projectUpdate,
  projectList,
  projectDelete,
  projectsDelete,
};
