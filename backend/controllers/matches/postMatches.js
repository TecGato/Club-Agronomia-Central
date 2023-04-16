const { postMatch } = require('../../helpers/matches/postMatches');

const createMatch = async (req, res) => {
  const { name, date, time, home_team, away_team, discipline } = req.body;
  try {
    const newMatch = await postMatch(
      name,
      date,
      time,
      home_team,
      away_team,
      discipline
    );
    return res.status(201).json({
      msg: 'Match Created Successfully',
      newMatch,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createMatch,
};
