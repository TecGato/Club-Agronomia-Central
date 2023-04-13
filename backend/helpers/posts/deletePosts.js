const mongoose = require("mongoose");
const Post = require("../../models/Post");

const deleteById = async (id) => {
  try {
    const deletedPost = await Post.deleteById(id);
    return deletedPost;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { deleteById };
