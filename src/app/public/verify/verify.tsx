import { adminAuth } from '@/lib/firbase-admin';
import { decodeJwtToken } from '@/utils/auth/decode';
import { FirebaseError } from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/auth';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const isFirebaseError = (error: unknown): error is FirebaseError =>
  (error as FirebaseError).code !== undefined;

export async function GET() {
  console.log('mjkhhghggfcfgfgc');

  const session = cookies().get('session')?.value || '';
  if (!session) {
    return NextResponse.json({ isLoggedIn: false }, { status: 401 });
  }

  try {
    const decodedToken = await adminAuth.verifySessionCookie(session);
    return NextResponse.json({ isLoggedIn: true, decodedToken }, { status: 200 });
  } catch (error) {
    if (isFirebaseError(error) && error.code === 'auth/session-cookie-expired') {
      const decodedToken: DecodedIdToken | null = decodeJwtToken(session);
      return NextResponse.json({ isLoggedIn: true, decodedToken }, { status: 200 });
    }
  }

  return NextResponse.json({ isLoggedIn: false }, { status: 401 });
}
