const Event = require('../../models/Event');
const DateEvent = require('../../models/DateEvent');
const eventDelete = async (id) => {
    try {
        const eventUpdated = await Event.findByIdAndDelete(id);
        await DateEvent.findOneAndUpdate(
            { events: { $in: [id] } },
            { $pull: { events: id } },
            { new: true }
        );
        return eventUpdated;
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    eventDelete,
};
