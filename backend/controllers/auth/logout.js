const { response, request } = require('express');
const { verify } = require('jsonwebtoken');
const { serialize } = require('cookie');

const logout = async (req = request, res = response) => {
  const { myTokenName } = req.cookies;

  if (!myTokenName) {
    return res.status(401).json({
      msg: 'No token',
    });
  }

  try {
    verify(myTokenName, process.env.SECRETORPRIVATEKEY);
    const serialized = serialize('myTokenName', null, {
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
