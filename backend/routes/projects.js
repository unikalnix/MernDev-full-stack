import express from "express";
import adminAuth from "../middlewares/adminAuth.js";
import {
  projectsList,
  projectAdd,
  projectUpdate,
  projectList,
  projectDelete,
  projectsDelete
} from "../controllers/projects.js";
import upload from "../middlewares/multer.js";

const projectRouter = express.Router();

projectRouter.get("/list", adminAuth, projectsList);
projectRouter.post(
  "/add",
  adminAuth,
  upload.fields([{ name: "images", maxCount: 4 }]),
  projectAdd
);
projectRouter.put(
  "/update/:id",
  adminAuth,
  upload.fields([{ name: "images", maxCount: 4 }]),
  projectUpdate
);
projectRouter.get("/list/:id", adminAuth, projectList);
projectRouter.delete("/delete/:id", adminAuth, projectDelete);
projectRouter.delete("/delete", adminAuth, projectsDelete);

export default projectRouter;
