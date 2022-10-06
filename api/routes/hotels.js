import express from "express";
import Hotel from "../models/hotel.js";
import { createError } from "../utils/error.js";
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const sveHotel = await newHotel.save();
    res.status(200).json({ msg: sveHotel });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});
// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ msg: updateHotel });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});
// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json(" Hotel as been delete ");
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});
// GET
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});
// GET ALL
router.get("/", async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err)
  }
});

export default router;
