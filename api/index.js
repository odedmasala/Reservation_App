import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"
import {
  autRoute,
  hotelsRoute,
  usersRoute,
  roomsRoute,
} from "./routes/index.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("The DB login was successful");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongo DB disconnected");
});

app.use(cookieParser())
app.use(express.json());
// app.use(cors())
app.use("/api/auth", autRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/room", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something wrong";
  return res.status(errorStatus).json({
    success: false,
    status :errorStatus,
    message : errorMessage,
    stack : err.stack,
  });
});

app.listen(8000, () => {
  connect();
  console.log("connect to backend at URL http://localhost:8000/");
});
