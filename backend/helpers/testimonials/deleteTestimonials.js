const mongoose = require("mongoose");
const Testimonial = require("../../models/Testimonial");

const deleteById = async (id) => {
  try {
    const deletedTestimonial = await Testimonial.deleteById(id);
    return deletedTestimonial;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  deleteById,
};
