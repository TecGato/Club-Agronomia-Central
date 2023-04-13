const { deleteById } = require("../../helpers/posts/deletePosts");

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteById(id);
    return res.status(200).send("The post has been successfully deleted");
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = {
  deletePost,
};
