import express from "express";
import {
  login,
  myProfile,
  register,
  logout,
} from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/myprofile", isAuthenticated, myProfile);
router.get("/logout", isAuthenticated, logout);

export default router;
