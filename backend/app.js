import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import "dotenv/config";
import authRouter from "./routes/adminAuth.js";
import projectRouter from "./routes/projects.js";
import connectCloudinary from "./config/cloudinary.js";
import adminAuth from "./middlewares/adminAuth.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

connectDB();
connectCloudinary();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/check-auth", adminAuth, (req, res) => {
  res.json({ ok: true, message: "Auth Successful" });
});

app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
