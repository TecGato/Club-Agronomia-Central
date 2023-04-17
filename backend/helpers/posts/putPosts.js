const Post = require("../../models/Post");

const putPost = async (id, updates) => {
  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { ...updates },
      { new: true }
    );
    return post;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putPost,
};
