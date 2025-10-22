import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Set to true to block all routes (maintenance mode)
const MAINTENANCE_MODE = false;

export function middleware(request: NextRequest) {
  if (MAINTENANCE_MODE) {
    // Allow access to static files and API routes if needed
    if (
      request.nextUrl.pathname.startsWith('/_next') ||
      request.nextUrl.pathname.startsWith('/api') ||
      request.nextUrl.pathname.includes('.')
    ) {
      return NextResponse.next();
    }

    // Redirect all other routes to not-found
    const url = request.nextUrl.clone();
    
    // Prevent infinite redirect loop
    if (url.pathname !== '/not-found') {
      url.pathname = '/not-found';
      const response = NextResponse.rewrite(url);
      response.headers.set('x-is-not-found', 'true');
      return response;
    }
  }

  return NextResponse.next();
}

// Configure which routes the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
