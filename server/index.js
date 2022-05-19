import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/auth.js";
import postRoute from "./routes/post.js";
import userRoute from "./routes/user.js";
import commentRoute from "./routes/comment.js";

//////////////////////
///   ENV Setup   ///
////////////////////
dotenv.config();

const app = express();

////////////////////
///   ROUTES   ////
//////////////////
app.use("/auth", authRoute);
app.use("/post", postRoute);
app.use("/user", userRoute);
app.use("/comment", commentRoute);

////////////////////////
///  Server Setup   ///
//////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Listening at PORT ${PORT}`);
});
