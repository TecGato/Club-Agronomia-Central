const Event = require("../../models/Event");
const DateEvent = require("../../models/DateEvent");

const deleteEvent = async (id) => {
  try {
    const event = await Event.findByIdAndDelete(id);
    await DateEvent.findOneAndUpdate(
      { events: { $in: [id] } },
      { $pull: { events: id } },
      { new: true }
    );
    return event;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  deleteEvent,
};
