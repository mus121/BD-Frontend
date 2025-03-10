export const fetchUserId = async (): Promise<string | null> => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL ?? ''}/private/me/user`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user. Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.id || null;
  } catch (error) {
    console.error('Error fetching user ID:', error);
    return null;
  }
};
