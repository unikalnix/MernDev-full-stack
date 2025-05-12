import express from "express";
import {adminLogin, adminLogout} from "../controllers/adminLogin.js";
import adminAuth from "../middlewares/adminAuth.js";

const authRouter = express.Router();

authRouter.post("/login", adminLogin);
authRouter.post("/logout", adminAuth,adminLogout);

export default authRouter;
