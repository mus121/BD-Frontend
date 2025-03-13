import { postApi } from '@/utils/api';
import { fetchConnection } from './connection';

export const findProfile = async (publicIdentifier: string) => {
  try {
    if (!publicIdentifier) {
      console.log('No Public Identifier Found');
      return null;
    }
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/findPerson`;
    const body = {
      entity_urn: '',
      public_identifier: publicIdentifier,
    };

    return await postApi(url, body);
  } catch (error) {
    console.error('Error fetching AI profile suggestions:', error);
    throw error;
  }
};

export const similarProfile = async (userId: string) => {
  try {
    const followPublicIdentifier = userId ? await fetchConnection(userId) : 'Not';

    if (!followPublicIdentifier || followPublicIdentifier.length === 0) {
      throw new Error('No publicIdentifier found in followed profiles.');
    }

    const payload = {
      identifiers: followPublicIdentifier.map((publicIdentifier: string) => ({
        entity_urn: '',
        public_identifier: publicIdentifier,
      })),
    };

    // Use postApi instead of axios.post
    const response = await postApi(
      `${process.env.NEXT_PUBLIC_API_URL}/api/aiSimilarProfiles`,
      payload,
    );

    const consolidatedArray = response.flatMap((entry: any) =>
      Array.isArray(entry) ? entry : [entry],
    );

    return consolidatedArray;
  } catch (error) {
    console.error('Error fetching AI profile suggestions:', error);
    throw error;
  }
};
