const Event = require("../../models/Event");

const putEvent = async (id, eventInfo) => {
  try {
    const event = await Event.updateOne(id, { ...eventInfo });
    return event;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  putEvent,
};
