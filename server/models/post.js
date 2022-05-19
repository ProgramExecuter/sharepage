import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  username: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  picUrl: String,
  caption: String,
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Post = mongoose.Model("Post", postSchema);

export default Post;
