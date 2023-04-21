const { postPost } = require('../../helpers/posts/postPosts');
const { uploadMedia } = require('../../cloudinary/uploadMedia');

const createPost = async (req, res) => {
  const { ...postInfo } = req.body;
  try {
    // Uploads Image to Cloudinary
    const uploadedPicture = await uploadMedia(postInfo.picture);
    // Sends post info + image url from cloudinary
    const newPost = await postPost({
      ...postInfo,
      picture: {
        secure_url: uploadedPicture.secure_url,
        public_id: uploadedPicture.public_id,
      },
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
