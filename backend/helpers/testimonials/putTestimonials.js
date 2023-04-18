const Testimonial = require('../../models/Testimonial');

const putTestimonial = async (id, name, testimony, picture, updatedAt) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(id, {
      name,
      testimony,
      picture,
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
