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
    console.log(req);
    const serialized = serialize('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 4,
      path: '/',
    });

    res.cookie('elvis', 123456798, {
      SameSite: 'None',
      sameSite: 'none',
      Domain: 'http://localhost:3000',
      domain: 'http://localhost:3000',
      httpOnly: true
    });

    return res.status(200).json({
      msg: 'succesfully logged',
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
