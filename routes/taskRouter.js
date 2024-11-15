import {
  createTask,
  getSingleTask,
  getTask,
  deleteTask,
  updateTask,
} from "../controller/taskController.js";
import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/postTask", isAuthenticated, createTask);
router.get("/getTask/:id", isAuthenticated, getSingleTask);
router.get("/getTask", isAuthenticated, getTask);
router.delete("/deleteTask/:id", isAuthenticated, deleteTask);
router.put("/updateTask/:id", isAuthenticated, updateTask);

export default router;
