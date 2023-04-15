const { postDirector } = require("../../helpers/directors/postDirectors");

const createDirector = async (req, res) => {
  const { name, position, picture } = req.body;
  try {
    const newDirector = await postDirector(name, position, picture);
    return res.status(201).json({
      msg: "Director Created Successfully",
      newDirector,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createDirector,
};
