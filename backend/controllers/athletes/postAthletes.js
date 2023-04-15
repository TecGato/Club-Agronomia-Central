const { postAthlete } = require("../../helpers/athletes/postAthletes");

const createAthlete = async (req, res) => {
  const { name, discipline, contact, email, date_of_birth, emergency_contact } =
    req.body;
  try {
    const newAthlete = await postAthlete(
      name,
      discipline,
      contact,
      email,
      date_of_birth,
      emergency_contact
    );
    return res.status(201).json({
      msg: "Athlete Created Successfully",
      newAthlete,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createAthlete,
};
