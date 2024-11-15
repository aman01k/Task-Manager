import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGOURL, {
      dbName: "TASK_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("cannot connect to db");
    });
};