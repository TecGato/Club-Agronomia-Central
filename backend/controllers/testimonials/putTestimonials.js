const {
  putTestimonial,
} = require('../../helpers/testimonials/putTestimonials');

const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const { title, description, picture, video, updatedAt } = req.body;
  try {
    const testimonial = await putTestimonial(
      id,
      title,
      description,
      picture,
      video,
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
