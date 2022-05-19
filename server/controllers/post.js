// Get All Posts
const getAllPosts = (req, res) => {
  res.send("GET /post");
};

// Create new Post
const createNewPost = (req, res) => {
  res.send("POST /post");
};

// Get a particular post
const getPost = (req, res) => {
  res.send(`GET /post/${req.params.id}`);
};

// Edit a paticular Post
const editPost = (req, res) => {
  res.send(`PATCH /post/${req.params.id}`);
};

// Delete a particular Post
const deletePost = (req, res) => {
  res.send(`DELETE /post/${req.params.id}`);
};

export { getAllPosts, createNewPost, getPost, editPost, deletePost };
