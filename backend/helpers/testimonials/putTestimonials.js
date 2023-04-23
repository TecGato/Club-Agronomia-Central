const Testimonial = require('../../models/Testimonial');

const putTestimonial = async (id, title, description, picture, video, updatedAt) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(id, {
      title,
      description,
      picture,
      video,
      updatedAt,
    });
    return testimonial;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putTestimonial,
};
