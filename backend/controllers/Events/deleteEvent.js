const { eventDelete } = require("../../helpers/events/deleteEvent");


const deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const eventDeleted = eventDelete(id);
        return res.status(200).json({
            msg: 'Event Deleted Succesfully',
            eventDeleted
        });
    } catch (error) {
        return res.status(404).json(error);
    }
};

module.exports = {
    deleteEvent,
};
