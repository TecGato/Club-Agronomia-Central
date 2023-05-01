const { NextResponse } = require('next/server');

const validateSession = (req) => {
  const token = req.cookies.get('authToken');
  console.log(token);

  if (req.nextUrl.pathname.includes('/dashboard')) {
    if (token === undefined) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
  return NextResponse.next();
};

module.exports = {
  validateSession,
};
