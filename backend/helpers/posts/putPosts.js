const Post = require("../../models/Post");

const putPost = async (id, title, description, picture, updatedAt) => {
  try {
    const post = await Post.updateOne(id, {
      title,
      description,
      picture,
      updatedAt,
    });
    return post;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putPost,
};
