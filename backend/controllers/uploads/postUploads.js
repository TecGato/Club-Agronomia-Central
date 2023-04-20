const { postUpload } = require('../../helpers/uploads/postUploads');

const uploadFile = async (req, res) => {
  try {
    const file = req.body.image;
    const upload = await postUpload(file);
    return res.status(200).json({
      msg: 'File Uploaded Successfully',
      upload,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: 'Error uploading file to Cloudinary', error });
  }
};

module.exports = {
  uploadFile,
};
