const {
  unsubscribe,
} = require("../../helpers/subscriptions/updateSubscriptions");

const updateSubscriber = async (req, res) => {
  const { email } = req.body;
  try {
    const subscriber = await unsubscribe(email);
    return res.status(200).json(subscriber);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = {
  updateSubscriber,
};
