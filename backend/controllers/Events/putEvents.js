const { putEvent } = require('../../helpers/events/putEvents');

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { ...eventInfo } = req.body;
  console.log(id, eventInfo);
  try {
    const event = await putEvent(id, eventInfo);
    return res.status(200).json(event);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  updateEvent,
};
