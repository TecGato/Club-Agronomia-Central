const mongoose = require("mongoose");
const Post = require("../../models/Post");

const getAllPosts = async () => {
  try {
    const allPosts = await Post.find();
    return allPosts;
  } catch (error) {
    console.error(error.message);
  }
};

const getPostByTitle = async (title) => {
  try {
    const post = await Post.findOne({ title: title });
    return post;
  } catch (error) {
    console.error(error.message);
  }
};

const getPostById = async (id) => {
  try {
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAllPosts, getPostByTitle, getPostById };
