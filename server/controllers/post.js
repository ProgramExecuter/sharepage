import { mongoose } from "mongoose";
import Post from "../models/post.js";

const ObjectId = mongoose.Types.ObjectId;

// Get All Posts
const getAllPosts = async (req, res) => {
  let postsData;

  try {
    // GET posts from DB
    postsData = await Post.find();
  } catch (err) {
    // Encountered error, return
    return res.status(400).json({ error: err.message });
  }

  // Return the posts
  return res.status(200).json(postsData);
};

// Create new Post
const createNewPost = async (req, res) => {
  // create the post
  let newPost = new Post(req.body);

  try {
    // Save the post in DB
    await newPost.save();
  } catch (err) {
    // Encountered error, return
    return res.status(400).json({ error: err.message });
  }

  // Return newly created & saved post
  return res.status(201).json(newPost);
};

// Get a particular post
const getPost = async (req, res) => {
  const postId = req.params.id;
  let particularPost;

  try {
    // Find the post with id as 'postId'
    particularPost = await Post.findById(postId);
  } catch (err) {
    // Post not found
    return res.status(404).json({ error: "Post not found" });
  }

  // Post not found
  if (!particularPost) {
    return res.status(404).json({ error: "Post not found" });
  }

  // Post found
  return res.status(200).json(particularPost);
};

// Edit a paticular Post
const editPost = async (req, res) => {
  const postId = req.params.id;
  let newInfo = req.body;
  let newPost = null;

  try {
    // Invalid ObjectID
    if (!ObjectId.isValid(postId)) throw new Error("Post Not Found");

    // Try updating the post
    newPost = await Post.findByIdAndUpdate(postId, newInfo);
  } catch (err) {
    // Post not found
    return res.status(400).json({ error: err.message });
  }

  if (!newPost) {
    // Post not found
    return res.status(404).json({ error: "Post Not Found" });
  }

  // Found and updated the post
  return res.status(200).json({ message: "Post Updated" });
};

// Delete a particular Post
const deletePost = async (req, res) => {
  const postId = req.params.id;
  let foundPost;

  try {
    // Check if ObjectID is valid
    if (ObjectId.isValid(postId)) {
      // Try deleting the post
      await Post.findByIdAndDelete(postId);
    }
  } catch (err) {
    // Error encountered, return
    return res.status(404).json({ err: err.message });
  }

  // Deleted the post
  return res.status(200).json({ message: "Post Deleted" });
};

export { getAllPosts, createNewPost, getPost, editPost, deletePost };
