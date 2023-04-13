const { updateEvent } = require("../../helpers/events/putEvent");

const putEvent = async (req, res) => {
    const { id, ...eventInfo } = req.body;
    try {
        const eventUpdated = updateEvent(id, eventInfo);
        return res.status(200).json(eventUpdated);
    } catch (error) {
        return res.status(404).json(error);
    }
};

module.exports = {
    putEvent,
};
