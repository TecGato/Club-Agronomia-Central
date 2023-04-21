const { postPost } = require('../../helpers/posts/postPosts');
const upload = require('../../cloudinary/upload');

const createPost = async (req, res) => {
  const { ...postInfo } = req.body;
  try {
    // Uploads Image to Cloudinary
    const uploadedPicture = await upload(postInfo.picture);
    // Sends post info + image url from cloudinary
    const newPost = await postPost({
      ...postInfo,
      picture: uploadedPicture.secure_url,
    });
    return res.status(201).json({
      msg: 'Post Created Successfully',
      newPost,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createPost,
};
