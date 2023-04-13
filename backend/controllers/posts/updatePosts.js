const { updateById } = require("../../helpers/posts/updatePosts");

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, description, picture, updatedAt } = req.body;
  try {
    const updatedPost = await updateById(
      id,
      title,
      description,
      picture,
      updatedAt
    );
    return res.status(200).json(updatedPost);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = {
  updatePost,
};
