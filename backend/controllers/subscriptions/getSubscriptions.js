const {
  getSubscriptions,
} = require("../../helpers/subscriptions/getSubscriptions");

const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await getSubscriptions();
    return res.status(200).json(subscribers);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = {
  getAllSubscribers,
};
