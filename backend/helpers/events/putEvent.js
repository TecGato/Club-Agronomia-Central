const Event = require('../../models/Event');

const updateEvent = async (id, eventInfo) => {
    try {
        const eventUpdated = await Event.findByIdAndUpdate(id, eventInfo);
        return eventUpdated;
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    updateEvent,
};
