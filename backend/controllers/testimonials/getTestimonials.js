const {
  getAllTestimonials,
  getTestimonialByName,
  getTestimonialById,
} = require("../../helpers/testimonials/testimonials.js");

const getTestimonials = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const testimonial = await getTestimonialByName(name);
      res.status(200).json(testimonial);
    } else {
      const allTestimonials = await getAllTestimonials();
      res.status(200).json(allTestimonials);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const testimonial = await getTestimonialById(id);
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  getTestimonials,
  getById,
};
