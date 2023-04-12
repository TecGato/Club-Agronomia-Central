const { getAllPosts } = require("../../helpers/posts/posts.js");

const getPosts = async (req, res) => {
  try {
    const allPosts = await getAllPosts();
    return res.status(200).json(allPosts);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = { getPosts };
