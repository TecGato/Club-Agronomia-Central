const Post = require('../../models/Post');
const { deleteMedia } = require('../../cloudinary/deleteMedia');

const deletePost = async (id) => {
  try {
    const postInfo = await Post.findById(id);
    await deleteMedia(postInfo.picture.public_id);
    const post = await Post.deleteOne({ _id: id });
    return post;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { deletePost };
