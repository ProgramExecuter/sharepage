import express from "express";

const router = express.Router();

// GET ALL POSTS
router.get("/", (req, res) => {
  res.send("GET /post");
});

// CREATE NEW POST
router.post("/", (req, res) => {
  res.send("POST /post");
});

// GET A POST
router.get("/:id", (req, res) => {
  res.send(`GET /post/${req.params.id}`);
});

// EDIT A POST
router.patch("/:id", (req, res) => {
  res.send(`PATCH /post/${req.params.id}`);
});

// DELETE A POST
router.delete("/:id", (req, res) => {
  res.send(`DELETE /post/${req.params.id}`);
});

export default router;
