const Director = require("../../models/Director");

const postDirector = async (name, position, picture) => {
  try {
    const newDirector = new Director({
      name,
      position,
      picture,
    });
    await newDirector.save();
    return newDirector;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postDirector,
};
