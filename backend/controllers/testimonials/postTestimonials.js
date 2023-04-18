const {
  postTestimonial,
} = require("../../helpers/testimonials/postTestimonials");

const createTestimonial = async (req, res) => {
  const { ...testimonialInfo } = req.body;
  try {
    const newTestimonial = await postTestimonial(testimonialInfo);
    return res.status(201).json({
      msg: "Testimonial Created Successfully",
      newTestimonial,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createTestimonial,
};
