import express from "express";
import { deleteUser, editUser, getUser } from "../controllers/user.js";

const router = express.Router();

// GET A USER
router.get("/:id", getUser);

// EDIT A USER
router.patch("/:id", editUser);

// DELETE A USER
router.delete("/:id", deleteUser);

export default router;
