const Post = require("../../models/Post");

const postPost = async (title, description, picture) => {
  try {
    const newPost = new Post({
      title,
      description,
      picture,
    });
    await newPost.save();
    return newPost;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postPost,
};
