import { postApi } from '@/utils/apis';

export const liConnection = async (
  userId: string,
  publicIdentifier: string,
  entityUrn: string,
  connectionStatus: boolean,
) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/private/linkedin/follow`;
  const requestBody = {
    userId,
    publicIdentifier,
    entityUrn,
    connectionStatus,
  };
  try {
    const response = await postApi(apiUrl, requestBody);
    return response;
  } catch (error) {
    console.error('Failed to submit data:', error);
    return null;
  }
};
