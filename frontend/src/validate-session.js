const { NextResponse } = require('next/server');

const validateSession = (req) => {
  const token = req.headers.cookie('authToken');
  console.log(token);

  if (req.nextUrl.pathname.includes('/dashboard')) {
    console.log('ESTOY EN DASHBOARD');
    if (token === undefined) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
  return NextResponse.next();
};

module.exports = {
  validateSession,
};
