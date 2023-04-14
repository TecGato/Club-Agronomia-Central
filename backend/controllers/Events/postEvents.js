const { createEvent } = require('../../helpers/events/postEvent');

const postEvent = async (req, res) => {
    const {
        name,
        beg_time,
        end_time,
        state,
        date,
        ammount,
        client,
        email,
        phone,
        description,
    } = req.body;
    try {
        const eventSaved = await createEvent(
            name,
            date,
            beg_time,
            end_time,
            state,
            ammount,
            client,
            email,
            phone,
            description
        );
        return res.status(201).json({
            msg: 'Event created succesfully',
            eventSaved,
        });
    } catch (error) {
        return res.status(404).json(error);
    }
};

module.exports = {
    postEvent,
};
