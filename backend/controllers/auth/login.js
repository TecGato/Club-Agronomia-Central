const { response, request } = require('express');
const User = require('../../models/User');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../../helpers/generateJWT');
const { serialize } = require('cookie');

const login = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    // verify the email exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: 'The email is not registered',
      });
    }
    // verify the user state
    if (!user.state) {
      return res.status(404).json({
        msg: 'The user has been deleted',
      });
    }
    // verify password
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        msg: 'The password is invalid',
      });
    }
    // Generate the JWT
    const token = await generateJWT(user.id);
    const serialized = serialize('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 4,
      path: '/',
    });

    res.cookie(serialized);

    return res.status(200).json({
      msg: 'succesfully logged',
      // authToken: token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Contact with administrator',
    });
  }
};

module.exports = {
  login,
};
