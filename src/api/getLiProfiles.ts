const getApi = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in POST API:', error);
    throw error;
  }
};

// eslint-disable-next-line consistent-return
export const getFollow = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/linkedinProfile`;
  try {
    const response = await getApi(apiUrl);
    if (response.profiles)
      return response?.profiles.map(({ publicIdentifier }) => publicIdentifier);
    return [];
  } catch (error) {
    return null;
  }
};
