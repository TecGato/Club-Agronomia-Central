const mongoose = require("mongoose");
const Testimonial = require("../models/Testimonial.js");

mongoose.connect();

const getAllTestimonials = async () => {
  try {
    const allTestimonials = await Testimonial.findAll();
    return allTestimonials;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getAllTestimonials;
