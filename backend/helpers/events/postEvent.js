const Event = require('../../models/Event');

const createEvent = async (
    name,
    date,
    beg_time,
    end_time,
    state,
    ammount,
    email,
    phone,
    description
) => {
    try {
        
        // Create event
        const event = new Event({
            name,
            beg_time,
            end_time,
            state,
            ammount,
            email,
            phone,
            description,
        });
        // Save in DB
        await event.save();
        return event;
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    createEvent,
};
