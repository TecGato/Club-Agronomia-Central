const Athlete = require("../../models/Athlete");

const putAthlete = async (id, athleteInfo) => {
  try {
    const athlete = await Athlete.updateOne(id, { ...athleteInfo });
    return athlete;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putAthlete,
};
