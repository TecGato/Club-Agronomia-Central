const {
  postTestimonial,
} = require('../../helpers/testimonials/postTestimonials');
const upload = require('../../cloudinary/upload');

const createTestimonial = async (req, res) => {
  const { ...testimonialInfo } = req.body;
  try {
    // Uploads Image to Cloudinary
    const uploadedPicture = await upload(testimonialInfo.picture);

    if (testimonialInfo.video) {
      // VIDEO WAS SENT BY USER. Uploads it to Cloudinary
      const uploadedVideo = await upload(testimonialInfo.video);
      // Sends testimonial info + image url and video url from cloudinary
      const newTestimonial = await postTestimonial({
        ...testimonialInfo,
        picture: uploadedPicture.secure_url,
        video: uploadedVideo.secure_url,
      });
      return res.status(201).json({
        msg: 'Testimonial Created Successfully',
        newTestimonial,
      });
    } else {
      // NO VIDEO WAS UPLOADED BY USER.
      // Sends testimonial info + image url from cloudinary
      const newTestimonial = await postTestimonial({
        ...testimonialInfo,
        picture: uploadedPicture.secure_url,
      });
      return res.status(201).json({
        msg: 'Testimonial Created Successfully',
        newTestimonial,
      });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createTestimonial,
};
