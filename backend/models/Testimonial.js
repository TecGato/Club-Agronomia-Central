const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  testimony: {
    type: String,
    required: true,
  },
  picture: String,
  createdAt: {
    type: Date,
    inmutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});
const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
