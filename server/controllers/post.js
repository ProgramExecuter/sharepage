import Post from "../models/post.js";

// Get All Posts
const getAllPosts = async (req, res) => {
  let postsData;

  try {
    // GET posts from DB
    postsData = await Post.find();
  } catch (err) {
    // Encountered error, return
    res.status(400).json({ error: err });
  }

  // Return the posts
  res.status(200).json(postsData);
};

// Create new Post
const createNewPost = (req, res) => {
  // create the post
  let newPost = new Post(req.body);

  try {
    // Save the post in DB
    newPost.save();
  } catch (err) {
    // Encountered error, return
    res.status(400).json({ error: err });
  }

  // Return new created & saved post
  res.status(201).json(newPost);
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
