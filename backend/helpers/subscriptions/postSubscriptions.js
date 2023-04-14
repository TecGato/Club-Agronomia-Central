const mongoose = require("mongoose");
const Subscription = require("../../models/Subscription");

const newSubscription = async (email) => {
  const subscriberExists = await Subscription.exists({ email });
  try {
    if (subscriberExists) {
      const subscriber = await Subscription.findOne({ email });
      return subscriber;
    } else {
      const newSubscriber = new Subscription({
        email,
      });
      await newSubscriber.save();
      return newSubscriber;
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  newSubscription,
};
