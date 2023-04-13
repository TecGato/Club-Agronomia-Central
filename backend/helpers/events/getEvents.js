const Event = require('../../models/Event');

const getAllEvents = async () => {
    try {
        const allEvents = await Event.find();
        return allEvents;
    } catch (error) {
        console.error(error.message);
    }
};
const getEventsByName = async (name) => {
    try {
        const allEvents = await Event.find({ name });
        return allEvents;
    } catch (error) {
        console.error(error.message);
    }
};
const findEventByID = async (id) => {
    try {
        const event = await Event.findById({ name });
        return event;
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    getAllEvents,
    getEventsByName,
    findEventByID,
};
