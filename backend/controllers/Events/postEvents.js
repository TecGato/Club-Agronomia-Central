const { postEvent } = require("../../helpers/events/postEvents");

const createEvent = async (req, res) => {
  const {
    name,
    beg_time,
    end_time,
    state,
    date,
    amount,
    client,
    email,
    phone,
    description,
  } = req.body;
  try {
    const event = await postEvent(
      name,
      date,
      beg_time,
      end_time,
      state,
      amount,
      client,
      email,
      phone,
      description
    );
    console.log(event);
    return res.status(201).json({
      msg: "Event Created Succesfully",
      event,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createEvent,
};
