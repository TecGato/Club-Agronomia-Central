const mongoose = require("mongoose");
const Post = require("../../models/Post");

const updateById = async (id, title, description, picture, updatedAt) => {
  try {
    const updatedPost = await Post.updateOne(id, {
      title,
      description,
      picture,
      updatedAt,
    });
    return updatedPost;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  updateById,
};
