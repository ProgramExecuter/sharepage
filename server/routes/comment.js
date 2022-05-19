import express from "express";
import {
  createComment,
  deleteComment,
  editComment,
} from "../controllers/comment.js";

const router = express.Router();

// CREATE A COMMENT
router.post("/", createComment);

// EDIT A COMMENT
router.patch("/:id", editComment);

// DELETE A COMMENT
router.delete("/:id", deleteComment);

export default router;
