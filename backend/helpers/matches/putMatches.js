const Match = require('../../models/Match');

const putMatch = async (id, matchInfo) => {
  try {
    const match = await Match.findByIdAndUpdate(id, { ...matchInfo });
    return match;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putMatch,
};
