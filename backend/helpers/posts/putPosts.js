const Post = require("../../models/Post");

const putPost = async (id, updates) => {
  try {
    await Post.findByIdAndUpdate(id, { ...updates });
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putPost,
};
