const Post = require("../../models/Post");

const putPost = async (id, title, description, picture) => {
  try {
    const post = await Post.updateOne(id, {
      title,
      description,
      picture,
    });
    return post;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putPost,
};
