import express from "express"
import {  deleteUser, getallUsers, getUser, updateUser } from "../controllers/user";

const router = express.Router()


// UPDATE
router.put("/:id", updateUser);
// DELETE
router.delete("/:id", deleteUser);
// GET
router.get("/:id", getUser);
// GET ALL
router.get("/", getallUsers);


export default router