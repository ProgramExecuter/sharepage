import express from "express";

const router = express.Router();

// LOGIN
router.post("/login", (req, res) => {
  res.send("POST /auth/login");
});

// SIGNUP(Register new User)
router.post("/signup", (req, res) => {
  res.send("POST /auth/signup");
});

// LOGOUT
router.post("/logout", (req, res) => {
  res.send("POST /auth/logout");
});

export default router;
