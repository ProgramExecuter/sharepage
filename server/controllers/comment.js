// Create a comment
const createComment = (req, res) => {
  res.send("POST /comment");
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
