import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/taskSchema.js";

export const createTask = catchAsyncError(async (req, res, next) => {
  const { title, description } = req.body;
  const createdBy = req.user._id;
  const task = await Task.create({
    title,
    description,
    createdBy,
  });
  res.status(200).json({
    success: true,
    task,
    message: "Task created successfully",
  });
});

export const deleteTask = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    return next(new ErrorHandler("Task not Found", 400));
  }
  await task.deleteOne();
  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
  });
});

export const updateTask = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let task = await Task.findById(id);
  if (!task) {
    return next(new ErrorHandler("Task not Found", 400));
  }
  task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Task Updated Successfully",
    task,
  });
});

export const getTask = catchAsyncError(async (req, res, next) => {
  const user = req.user._id;
  const task = await Task.find({ createdBy: user });
  res.status(200).json({
    success: true,
    task,
  });
});

export const getSingleTask = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let task = await Task.findById(id);
  if (!task) {
    return next(new ErrorHandler("Task not Found", 400));
  }
  res.status(200).json({
    success: true,
    task,
  });
});
