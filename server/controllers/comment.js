import Comment from "../models/comment.js";

// Create a comment
const createComment = (req, res) => {
  // create new comment object
  const newComment = new Comment(req.body);

  try {
    // Save the comment
    newComment.save();
  } catch (err) {
    // Error encountered
    return req.status(400).json({ error: err });
  }

  // Return the newly created comment
  return res.status(201).json(newComment);
};

// Edit a comment
const editComment = (req, res) => {
  res.send(`PATCH /comment/${req.params.id}`);
};

// Delete a comment
const deleteComment = (req, res) => {
  res.send(`DELETE /comment/${req.params.id}`);
};

export { createComment, editComment, deleteComment };
