const mongoose = require("mongoose");
const Testimonial = require("../../models/Testimonial");

const updateById = async (id, name, testimony, picture, updatedAt) => {
  try {
    const updatedTestimony = await Testimonial.updateOne(id, {
      name,
      testimony,
      picture,
      updatedAt,
    });
    return updatedTestimony;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  updateById,
};
