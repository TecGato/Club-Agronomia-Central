const Testimonial = require('../../models/Testimonial');
const { deleteMedia } = require('../../cloudinary/deleteMedia');

const deleteTestimonial = async (id) => {
  try {
    const testimonialInfo = await Testimonial.findById(id);
    await deleteMedia(testimonialInfo.picture.public_id);
    if (testimonialInfo.video) {
      await deleteMedia(testimonialInfo.video.public_id);
    }
    const testimonial = await Testimonial.deleteOne({ _id: id });
    return testimonial;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  deleteTestimonial,
};
