import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { cookies } = req;
  const sessionToken = cookies.get(process.env.SESSION_COOKIE_NAME!)?.value;

  type CurrentUserResponse = {
    response: {
      user: {
        email: string;
        name: string;
        id: number;
        isBlocked: boolean;
        isOnboarded: boolean;
        isEmailVerified: boolean;
        providerId: string;
      };
    };
  };

  const isPublicRoute = req.url === 'http://localhost:3000/';

  // if (isPublicRoute) {
  //   return NextResponse.next();
  // }

  try {
    if (sessionToken) {
      const responseAPI = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/private/user/current`, {
        headers: {
          Cookie: `${process.env.SESSION_COOKIE_NAME}=${sessionToken}`,
        },
        credentials: 'include',
      });

      console.log('Response Staus', responseAPI.status);
      if (responseAPI.status === 200) {
        const jsonResponse: CurrentUserResponse = await responseAPI.json();

        if (!jsonResponse.response.user.isEmailVerified) {
          if (req.url.includes('/confirm-email')) {
            return NextResponse.next();
          }
          return NextResponse.redirect(new URL('/confirm-email', req.url));
        }

        if (jsonResponse.response.user.isBlocked) {
          if (req.url.includes('/access-restricted')) {
            return NextResponse.next();
          }
          return NextResponse.redirect(new URL('/access-restricted', req.url));
        }

        if (isPublicRoute) {
          return NextResponse.redirect(new URL('/dashboard', req.url));
        }
        return NextResponse.next();
      }
    }

    throw new Error('unauthenticated');
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL('https://people.development.qlu.ai/public/auth/welcome'));
  }
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/dashboard'],
};
