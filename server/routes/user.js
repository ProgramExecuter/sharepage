import express from "express";

const router = express.Router();

// GET A USER
router.get("/:id", (req, res) => {
  res.send(`GET /user/${req.params.id}`);
});

// EDIT A USER
router.patch("/:id", (req, res) => {
  res.send(`PATCH /user/${req.params.id}`);
});

// DELETE A USER
router.delete("/:id", (req, res) => {
  res.send(`DELETE /user/${req.params.id}`);
});

export default router;
