const { updateById } = require("../../helpers/testimonials/updateTestimonials");

const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const { name, testimony, picture, updatedAt } = req.body;
  try {
    const updatedTestimony = await updateById(
      id,
      name,
      testimony,
      picture,
      updatedAt
    );
    return res.status(200).json(updatedTestimony);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = {
  updateTestimonial,
};
