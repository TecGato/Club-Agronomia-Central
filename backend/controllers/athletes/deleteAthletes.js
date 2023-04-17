const { deleteAthlete } = require("../../helpers/athletes/deleteAthletes");

const deleteById = async (res, req) => {
  const { id } = req.params;
  try {
    const athlete = await deleteAthlete(id);
    return res.status(200).json({
      msg: "Athlete Deleted Successfully",
      athlete,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  deleteById,
};
