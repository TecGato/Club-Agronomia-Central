const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const upload = async (file) => {
  // Upload
  try {
    const result = await cloudinary.uploader.upload(file, {
      upload_preset: 'club_agronomia_central',
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = upload;
