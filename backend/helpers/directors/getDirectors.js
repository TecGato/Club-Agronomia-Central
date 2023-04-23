const Director = require('../../models/Director');

const getAllDirectors = async () => {
  try {
    const directors = await Director.find();
    return directors;
  } catch (error) {
    console.error(error.message);
  }
};

const getDirectorsByName = async (name) => {
  try {
    const directors = await Director.find({ name });
    return directors;
  } catch (error) {
    console.error(error.message);
  }
};

const getDirectorByPosition = async (position) => {
  try {
    const director = await Director.find({ position });
    return director;
  } catch (error) {
    console.error(error.message);
  }
};

const getDirectorById = async (id) => {
  try {
    const director = await Director.findById(id);
    return director;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllDirectors,
  getDirectorsByName,
  getDirectorByPosition,
  getDirectorById,
};
