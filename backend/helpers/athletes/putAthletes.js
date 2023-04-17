const Athlete = require("../../models/Athlete");

const putAthlete = async (id, updates) => {
  try {
    await Athlete.findByIdAndUpdate(id, { ...updates });
    const athlete = await Athlete.findById(id);
    return athlete;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putAthlete,
};
