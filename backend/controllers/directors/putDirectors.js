const { putDirector } = require("../../helpers/directors/putDirectors");

const updateDirector = async (req, res) => {
  const { id } = req.params;
  const { name, position, picture } = req.body;
  try {
    const director = await putDirector(id, name, position, picture);
    return res.status(202).json(director);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updateDirector,
};
