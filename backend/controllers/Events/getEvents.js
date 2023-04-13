const { getAllEvents } = require('../../helpers/events/getEvents');

const getEvents = async (req, res) => {
    try {
        const events = await getAllEvents();
        return res.status(200).json(events);
    } catch (error) {
        return res.status(404).json(error);
    }
};

module.exports = {
    getEvents,
};
