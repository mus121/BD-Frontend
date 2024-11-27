const postApi = async (url: string, body: any): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
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

export const submitData = async (
  publicIdentifier: string,
  entityUrn: string,
  isConnected: boolean,
) => {
  const apiUrl = 'http://localhost:8000/api/linkedinProfile';
  const requestBody = {
    publicIdentifier,
    entityUrn,
    isConnected,
  };

  try {
    const response = await postApi(apiUrl, requestBody);
    console.log('API Response:', response);
  } catch (error) {
    console.error('Failed to submit data:', error);
  }
};
