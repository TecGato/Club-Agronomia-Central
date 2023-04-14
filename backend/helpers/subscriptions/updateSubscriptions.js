const mongoose = require("mongoose");
const Subscription = require("../../models/Subscription");

const unsubscribe = async (email) => {
  try {
    const subscriber = await Subscription.updateOne(email, {
      subscribed: false,
    });
    return subscriber;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  unsubscribe,
};
