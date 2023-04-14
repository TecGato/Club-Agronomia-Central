const {
  getAllPosts,
  getPostByTitle,
  getPostById,
} = require("../../helpers/posts/getPosts.js");

const getPosts = async (req, res) => {
  const { title } = req.query;
  try {
    if (title) {
      const post = await getPostByTitle(title);
      return res.status(200).json(post);
    } else {
      const allPosts = await getAllPosts();
      return res.status(200).json(allPosts);
    }
  } catch (error) {
    return res.status(404).send(error);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await getPostById(id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = { getPosts, getById };
