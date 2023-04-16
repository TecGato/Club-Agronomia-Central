const Director = require("../../models/Director");

const putDirector = async (id, name, position, picture) => {
  try {
    const director = await Director.findByIdAndUpdate(id, {
      name,
      position,
      picture,
    });
    return director;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putDirector,
};
