import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  username: String,
  postId: String,
  caption: String,
});

const Comment = mongoose.Model("Comment", commentSchema);

export default Comment;
