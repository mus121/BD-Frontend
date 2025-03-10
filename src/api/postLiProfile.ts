import { postApi } from '@/utils/apis';

export const liProfileData = async (
  userId: string,
  firstName: string,
  lastName: string,
  publicIdentifier: string,
  entityUrn: string,
) => {
  try {
    if (!userId) {
      console.error('Error: User ID is missing.');
      return;
    }

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL ?? ''}/private/linkedin/profile`;
    const requestBody = {
      userId,
      firstName,
      lastName,
      publicIdentifier,
      entityUrn,
    };

    const response = await postApi(apiUrl, requestBody);
    console.log('API Response:', response);
  } catch (error) {
    console.error('Failed to submit data:', error);
  }
};
