const {
  putTestimonial,
} = require('../../helpers/testimonials/putTestimonials');

const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const { name, testimony, picture, updatedAt } = req.body;
  try {
    const testimonial = await putTestimonial(
      id,
      name,
      testimony,
      picture,
      updatedAt
    );
    return res.status(202).json(testimonial);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  updateTestimonial,
};
