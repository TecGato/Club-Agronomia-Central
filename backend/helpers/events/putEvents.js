const Event = require('../../models/Event');

const putEvent = async (id, eventInfo) => {
  try {
    const event = await Event.findOneAndUpdate({_id: id}, { ...eventInfo }, { new: true });
    return event;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putEvent,
};
