import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { autRoute, hotelsRoute, usersRoute, roomsRoute } from "./routes/index.js";
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

app.use("api/auth", autRoute);
app.use("api/users", usersRoute);
app.use("api/hotels", hotelsRoute);
app.use("api/room", roomsRoute);

app.listen(8000, () => {
  connect();
  console.log("connect to backend at URL http://localhost:8000/api");
});
