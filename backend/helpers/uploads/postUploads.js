const upload = require('../../cloudinary/upload');

const postUpload = async (file) => {
  try {
    const result = await upload(file);
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postUpload,
};
