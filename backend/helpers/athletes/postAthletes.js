const Athlete = require("../../models/Athlete");

const postAthlete = async (
  name,
  discipline,
  contact,
  email,
  date_of_birth,
  emergency_contact
) => {
  try {
    const newAthlete = new Athlete({
      name,
      discipline,
      contact,
      email,
      date_of_birth,
      emergency_contact,
    });
    await newAthlete.save();
    return newAthlete;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postAthlete,
};
