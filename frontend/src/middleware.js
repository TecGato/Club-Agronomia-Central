import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { getCookie } from 'cookies-next';

export async function middleware(request) {
  // const token = request.cookies.get('authToken');
  const token = getCookie('authToken');
  if (token === undefined) {
    console.log('no tengo token mamahuevo');
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  try {
    const { payload } = await jwtVerify(
      token.value,
      new TextEncoder().encode(process.env.NEXT_SECRETORPRIVATEKEY)
    );
    console.log(payload);
    return NextResponse.next();
  } catch (error) {
    console.error(error.message);
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: '/dashboard/:path*',
};
