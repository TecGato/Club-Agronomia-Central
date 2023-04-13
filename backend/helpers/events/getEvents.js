const Event = require('../../models/Event');

const getAllEvents = async () => {
    try {
        const allEvents = await Event.find();
        return allEvents;
      } catch (error) {
        console.error(error.message);
      }
};

module.exports = {
    getAllEvents
}