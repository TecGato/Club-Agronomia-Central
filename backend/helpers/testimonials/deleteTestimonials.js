const Testimonial = require('../../models/Testimonial');

const deleteTestimonial = async (id) => {
  try {
    const testimonial = await Testimonial.deleteOne({ _id: id });
    return testimonial;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  deleteTestimonial,
};
