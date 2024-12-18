import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('session_token');
  const currentPath = req.nextUrl.pathname;
  const publicRoutes = ['/'];

  if (!token) {
    if (!publicRoutes.includes(currentPath)) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.next();
  }

  if (token && currentPath === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Allow other requests to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
