import { NextRequest, NextResponse } from 'next/server';

export function loggerMiddleware(request: NextRequest) {
  console.log(`Request to: ${request.nextUrl.pathname} at ${new Date().toISOString()} ${process.env.BASE_API_URL}`);
  return NextResponse.next();
}
