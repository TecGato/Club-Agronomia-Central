const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  incomePerMonth: {
    0: {
      type: Number,
      default: 0,
    },
    1: {
      type: Number,
      default: 0,
    },
    2: {
      type: Number,
      default: 0,
    },
    3: {
      type: Number,
      default: 0,
    },
    4: {
      type: Number,
      default: 0,
    },
    5: {
      type: Number,
      default: 0,
    },
    6: {
      type: Number,
      default: 0,
    },
    7: {
      type: Number,
      default: 0,
    },
    8: {
      type: Number,
      default: 0,
    },
    9: {
      type: Number,
      default: 0,
    },
    10: {
      type: Number,
      default: 0,
    },
    11: {
      type: Number,
      default: 0,
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

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;
