import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('authToken');
  if (request.nextUrl.pathname.includes('/dashboard')) {
    if (token === undefined) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }
  return NextResponse.next();
}