const {
  getAllDirectors,
  getDirectorsByName,
  getDirectorByPosition,
  getDirectorById,
} = require("../../helpers/directors/getDirectors");

const getDirectors = async (req, res) => {
  const { name, position } = req.query;
  try {
    if (name) {
      const directors = await getDirectorsByName(name);
      return res.status(200).json(directors);
    } else if (position) {
      const director = await getDirectorByPosition(position);
      return res.status(200).json(director);
    } else {
      const directors = await getAllDirectors();
      return res.status(200).json(directors);
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const director = await getDirectorById(id);
    return res.status(200).json(director);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  getDirectors,
  getById,
};
