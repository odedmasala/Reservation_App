import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config()

try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    handleError(error);
  }

app.listen(8000, () => {
  console.log("connect to backend");
});
