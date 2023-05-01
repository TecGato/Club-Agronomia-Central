const { getUser, getAllUsers } = require('../../helpers/users/getUsers');
const User = require('../../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json(error);
  }
};

const checkLogin = async (req, res) => {
  const { ...userInfo } = req.body;
  try {
    const cookie = await getUser(userInfo);
    res.setHeader('Set-Cookie', cookie);
    return res.status(200).json('Logged in Successfully');
  } catch (error) {
    return res.status(401).json({
      msg: 'Login Failed',
      error,
    });
  }
};

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const newUser = new User({
      name,
      email,
      password,
      role,
    });
    await newUser.save();
    return res.status(201).json({
      msg: 'User Created Successfully',
      newUser,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getUsers,
  checkLogin,
  createUser,
};
