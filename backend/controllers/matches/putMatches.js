const { putMatch } = require('../../helpers/matches/putMatches');

const updateMatch = async (req, res) => {
  const { id } = req.params;
  const { ...matchInfo } = req.body;
  try {
    const match = await putMatch(id, matchInfo);
    return res.status(202).json(match);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updateMatch,
};
