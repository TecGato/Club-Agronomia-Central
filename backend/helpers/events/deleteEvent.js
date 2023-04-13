const Event = require('../../models/Event');

const eventDelete = async (id) => {
    try {
        const eventUpdated = await Event.findByIdAndUpdate(id, {
            deleted: true,
        });
        return eventUpdated;
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    eventDelete,
};
