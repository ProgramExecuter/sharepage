import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  name: String,
  status: String,
  profilePicUrl: String,
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const User = mongoose.Model("User", userSchema);

export default User;
