import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  previewUrl: { type: String, required: true },
  codeUrl: { type: String, required: true },
  images: { type: [String], required: true },
  status: { type: String, required: true },
  technologies: { type: [String], required: true },
  whatsNew: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const projectModel =
  mongoose.models.projectModel || mongoose.model("project", projectSchema);

export default projectModel;
