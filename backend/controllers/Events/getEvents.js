const {
    getAllEvents,
    getEventsByName,
} = require('../../helpers/events/getEvents');

const getEvents = async (req, res) => {
    const { name } = req.query;
    try {
        const events = name
            ? await getEventsByName(name)
            : await getAllEvents();
        return res.status(200).json(events);
    } catch (error) {
        return res.status(404).json(error);
    }
};

module.exports = {
    getEvents,
};
