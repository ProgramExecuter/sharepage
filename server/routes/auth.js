import express from "express";
import { loginUser, logoutUser, signupUser } from "../controllers/auth.js";

const router = express.Router();

// LOGIN
router.post("/login", loginUser);

// SIGNUP(Register new User)
router.post("/signup", signupUser);

// LOGOUT
router.post("/logout", logoutUser);

export default router;
