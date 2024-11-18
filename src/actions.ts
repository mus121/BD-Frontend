'use server';

import { cookies } from 'next/headers';

export async function email() {
  const userEmail = await cookies();
  const emails = await userEmail.get('user_email');
  return emails;
}

export async function name() {
  const userName = await cookies();
  const user = await userName.get('user_name');
  return user;
}

export async function userImg() {
  const img = await cookies();
  const userimg = await img.get('user_image');
  return userimg;
}
