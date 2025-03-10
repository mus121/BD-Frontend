import { getApi } from '@/utils/apis';

export const fetchFollowedProfiles = async (userId: string) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/private/linkedin/connection?userId=${userId}`;
  try {
    const response = await getApi(apiUrl);
    if (response.data)
      return response?.data.map(
        ({ public_identifier }: { public_identifier: string }) => public_identifier,
      );
    return [];
  } catch (error) {
    return null;
  }
};
