import express from "express";

import {
  getAllPosts,
  createNewPost,
  getPost,
  editPost,
  deletePost,
} from "../controllers/post.js";

const router = express.Router();

// GET ALL POSTS
router.get("/", getAllPosts);

// CREATE NEW POST
router.post("/", createNewPost);

// GET A POST
router.get("/:id", getPost);

// EDIT A POST
router.patch("/:id", editPost);

// DELETE A POST
router.delete("/:id", deletePost);

export default router;
