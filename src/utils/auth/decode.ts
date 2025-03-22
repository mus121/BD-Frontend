export function decodeJwtToken(token: string) {
  try {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  } catch (error) {
    console.log('Failed to decode JWT Token', { error });
    return null;
  }
}
