const mongoose = require("mongoose");
const Subscription = require("../../models/Subscription");

const getSubscriptions = async () => {
  try {
    const subscribers = await Subscription.find();
    return subscribers;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getSubscriptions };
