import express from "express";

const router = express.Router();

// CREATE A COMMENT
router.post("/", (req, res) => {
  res.send("POST /comment");
});

// EDIT A COMMENT
router.patch("/:id", (req, res) => {
  res.send(`PATCH /comment/${req.params.id}`);
});

// DELETE A COMMENT
router.delete("/:id", (req, res) => {
  res.send(`DELETE /comment/${req.params.id}`);
});

export default router;
