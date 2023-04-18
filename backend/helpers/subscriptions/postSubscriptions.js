const Subscription = require('../../models/Subscription');

const postSubscription = async (email) => {
  const subscriptionExists = await Subscription.exists({ email });
  try {
    if (subscriptionExists) {
      const subscription = await Subscription.findOne({ email });
      return subscription;
    } else {
      const newSubscription = new Subscription({
        email,
      });
      await newSubscription.save();
      return newSubscription;
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  postSubscription,
};
