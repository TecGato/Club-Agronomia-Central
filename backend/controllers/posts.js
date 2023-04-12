const mongoose = require("mongoose");
const Post = require("../models/Post.js");

// mongoose.connect();

const getAllPosts = async () => {
  try {
    const allPosts = await Post.findAll();
    return allPosts;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getAllPosts;
