const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  discipline: {
    type: String,
    enum: [
      'Ajedrez',
      'Fútbol Infantil',
      'Futsal',
      'Futsal Femenino',
      'Taekwondo',
      'Centro de Entrenamiento',
    ],
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
  emergency_contact: {
    contact_name: {
      type: String,
      required: true,
    },
    contact_phone: {
      type: String,
      required: true,
    },
    contact_email: {
      type: String,
    },
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

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;
