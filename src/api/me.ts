import { ICurrentUser } from '@/interfaces/user';

export const fetchCurrentUser = async (): Promise<ICurrentUser | null> => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/private/user/current`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      console.error(`Fetch failed: ${response.status} - ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    const user = data?.response?.user;

    return user
      ? {
          id: user.id,
          isBlocked: user.isBlocked ?? false,
          email: user.email,
          name: user.name,
          isOnboarded: user.isOnboarded ?? false,
          isEmailVerified: user.isEmailVerified ?? false,
          providerId: user.providerId,
        }
      : null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};
