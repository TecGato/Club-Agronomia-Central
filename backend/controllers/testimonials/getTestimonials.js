const mongoose = require("mongoose");
const {
  getAllTestimonials,
} = require("../../helpers/testimonials/testimonials.js");

const getTestimonials = async (req, res) => {
  try {
    const allTestimonials = await getAllTestimonials();
    console.log("controller");
    res.status(200).json(allTestimonials);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  getTestimonials,
};
