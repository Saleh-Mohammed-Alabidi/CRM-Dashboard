import { NextRequest, NextResponse } from 'next/server';

export function authMiddleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');

  console.log("=================",token)
  // if (!token) {
  //   return NextResponse.redirect(new URL('/sign-In', request.url));
  // }


  return NextResponse.next();
}
