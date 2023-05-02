const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const { serialize } = require('cookie');

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error.message);
  }
};

const getUser = async (userInfo) => {
  try {
    const user = await User.find({ email: userInfo.email });
    if (!user) {
      throw new Error("The user doesn't exist");
    }

    if (user.password === userInfo.password) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
          email: user.email,
          username: user.name,
        },
        'token'
      );

      const serialized = serialize('myTokenName', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: '/',
      });

      return serialized;
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getUser,
  getAllUsers,
};
