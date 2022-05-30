import Comment from "../models/comment.js";

// Create a comment
const createComment = async (req, res) => {
  // create new comment object
  const newComment = new Comment(req.body);

  try {
    // Save the comment
    await newComment.save();
  } catch (err) {
    // Error encountered
    return req.status(400).json({ error: err });
  }

  // Return the newly created comment
  return res.status(201).json(newComment);
};

// Edit a comment
const editComment = async (req, res) => {
  const commentId = req.params.id;
  let foundComment;

  try {
    // Find the comment and update
    foundComment = await Comment.findByIdAndUpdate(commentId, req.body);
  } catch (err) {
    // Error encountered
    return res.status(404).json({ message: "Comment not found" });
  }

  // Comment not found
  if (!foundComment)
    return res.status(404).json({ message: "Comment not found" });

  return res.status(200).json({ message: "Comment Edited" });
};

// Delete a comment
const deleteComment = async (req, res) => {
  const commentId = req.params.id;

  try {
    // Find the comment and delete
    await Comment.findByIdAndDelete(commentId);
  } catch (err) {
    // Error encountered
    return res.status(404).json({ error: err.message });
  }

  return res.status(200).json({ message: "Comment Deleted" });
};

export { createComment, editComment, deleteComment };
