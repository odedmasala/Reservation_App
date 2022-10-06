import express from "express";
import { createHotel, deleteHotel, getallHotels, getHotel, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/hotel.js";
import { createError } from "../utils/error.js";
const router = express.Router();

// CREATE
router.post("/", createHotel);
// UPDATE
router.put("/:id", updateHotel);
// DELETE
router.delete("/:id", deleteHotel);
// GET
router.get("/:id", getHotel);
// GET ALL
router.get("/", getallHotels);

export default router;
