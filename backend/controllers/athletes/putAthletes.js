const { putAthlete } = require("../../helpers/athletes/putAthletes");

const updateAthlete = async (req, res) => {
  const { id } = req.params;
  const { ...athleteInfo } = req.body;
  try {
    const athlete = await putAthlete(id, athleteInfo);
    return res.status(202).json(athlete);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updateAthlete,
};
