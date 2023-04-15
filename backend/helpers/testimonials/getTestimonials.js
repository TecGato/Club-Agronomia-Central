const Testimonial = require("../../models/Testimonial");

const getAllTestimonials = async () => {
  try {
    const allTestimonials = await Testimonial.find();
    return allTestimonials;
  } catch (error) {
    console.error(error.message);
  }
};

const getTestimonialByName = async (name) => {
  try {
    const testimonial = await Testimonial.findOne({ name: name });
    return testimonial;
  } catch (error) {
    console.error(error.message);
  }
};

const getTestimonialById = async (id) => {
  try {
    const testimonial = await Testimonial.findById(id);
    return testimonial;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllTestimonials,
  getTestimonialByName,
  getTestimonialById,
};
