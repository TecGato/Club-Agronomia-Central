const { postPost } = require("../../helpers/posts/postPosts");

const createPost = async (req, res) => {
  const { ...postInfo } = req.body;
  try {
    const newPost = await postPost(postInfo);
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
