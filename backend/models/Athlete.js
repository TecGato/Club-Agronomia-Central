const mongoose = require("mongoose");

const athleteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  parents_contact: {
    parents_name: {
      type: String,
      required: true,
    },
    parents_contact: {
      type: String,
      required: true,
    },
    parents_email: {
      type: String,
    },
  },
});

const Athlete = mongoose.model("Athlete", athleteSchema);

module.exports = Athlete;
