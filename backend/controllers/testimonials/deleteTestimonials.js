const { deleteById } = require("../../helpers/testimonials/deleteTestimonials");

const deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteById(id);
    return res
      .status(200)
      .send("The testimonial has been successfully deleted.");
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = {
  deleteTestimonial,
};
