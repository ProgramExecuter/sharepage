import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/auth.js";
import postRoute from "./routes/post.js";
import userRoute from "./routes/user.js";
import commentRoute from "./routes/comment.js";
import mongoose from "mongoose";

// ENV Setup
dotenv.config();

// MongoDB connection
mongoose.connect(
  process.env.MONGOURI,
  {
    useNewURLParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB Connected");
    }
  }
);

const app = express();

// ROUTES
app.use("/auth", authRoute);
app.use("/post", postRoute);
app.use("/user", userRoute);
app.use("/comment", commentRoute);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Listening at PORT ${PORT}`);
});
