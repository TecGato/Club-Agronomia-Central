const { putPost } = require("../../helpers/posts/putPosts");

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, description, picture } = req.body;
  try {
    const post = await putPost(id, title, description, picture);
    return res.status(202).json(post);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updatePost,
};
