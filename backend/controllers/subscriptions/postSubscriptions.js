const {
  newSubscription,
} = require("../../helpers/subscriptions/postSubscriptions");

const createSubscriber = async (req, res) => {
  const { email } = req.body;
  try {
    const newSubscriber = await newSubscription(email);
    return res.status(202).json(newSubscriber);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = {
  createSubscriber,
};
