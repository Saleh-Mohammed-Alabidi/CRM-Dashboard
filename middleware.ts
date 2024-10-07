import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { authMiddleware, loggerMiddleware } from './middleware/';

export function middleware(request: NextRequest) {
    
  const url = request.nextUrl.pathname;
 

  // Example of redirect based on path
  if (url === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }
  // Execute logger middleware first
   loggerMiddleware(request);
 
  // Execute authentication middleware next
  const authResponse = authMiddleware(request);
  if (authResponse) return authResponse;

  return NextResponse.next();
}

// Apply middleware to specific paths
export const config = {
  matcher: [ '/home/:path*','/leads/:path*','/']
};
