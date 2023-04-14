const Event = require('../../models/Event');
const DateEvent = require('../../models/DateEvent');

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
            date,
            ammount,
            email,
            phone,
            description,
        });
        // Save in DB
        await event.save();
        // Check if an event already exists on the specified day
        const dateEvent = await DateEvent.findOne({ date });
        if (dateEvent) {
            dateEvent.events = [...dateEvent.events, event._id];
            await dateEvent.save();
        } else {
            const newDate = new DateEvent({ date, events: [event._id] });
            await newDate.save();
        }

        return event;
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    createEvent,
};
