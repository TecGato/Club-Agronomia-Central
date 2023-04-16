const Match = require('../../models/Match');

const postMatch = async (
  name,
  date,
  time,
  home_team,
  away_team,
  discipline
) => {
  try {
    const newMatch = new Match({
      name,
      date,
      time,
      home_team,
      away_team,
      discipline,
    });
    await newMatch.save();
    return newMatch;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postMatch,
};
