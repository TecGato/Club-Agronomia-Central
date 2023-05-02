const { response, request } = require('express');
const { verify } = require('jsonwebtoken');
const { serialize } = require('cookie');

const logout = async (req = request, res = response) => {
  const { authToken } = req.cookies;

  if (!authToken) {
    return res.status(401).json({
      msg: 'No token',
    });
  }

  try {
    verify(authToken, process.env.SECRETORPRIVATEKEY);
    const serialized = serialize('authToken', null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 0,
      path: '/',
    });

    res.setHeader('Set-Cookie', serialized);

    return res.status(200).json({
      msg: 'Logged out Successfully',
    });
  } catch (error) {
    return res.status(401).json({
      msg: 'Invalid token',
    });
  }
};

module.exports = { logout };
