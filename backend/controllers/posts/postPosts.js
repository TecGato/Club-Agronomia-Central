const { postPost } = require("../../helpers/posts/postPosts");

const createPost = async (req, res) => {
  const { title, description, picture } = req.body;
  try {
    const newPost = await postPost(title, description, picture);
    return res.status(201).json({
      msg: "Post Created Successfully",
      newPost,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createPost,
};
