const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    beg_time: {
        type: String,
        required: true,
    },
    end_time: {
        type: String,
        required: true,
    },
    state: {
        type: Number,
        required: true,
        default: 1,
    },
    date: {
        type: String,
        required: true,
    },
    ammount: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        inmutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
