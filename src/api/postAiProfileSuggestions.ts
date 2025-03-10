import axios from 'axios';
// import { useUserId } from '@/hooks/useMe';
import { fetchFollowedProfiles } from './getLiProfiles';

export const postAiProfileSuggestions = async (userId: string) => {
  // const { userId } = useUserId();
  try {
    const followPublicIdentifier = await (userId ? fetchFollowedProfiles(userId) : 'Not');

    if (!followPublicIdentifier || followPublicIdentifier.length === 0) {
      throw new Error('No publicIdentifier found in followed profiles.');
    }

    // Construct the Payload Dynamically
    const payload = {
      identifiers: followPublicIdentifier.map((publicIdentifier: string) => ({
        entity_urn: '',
        public_identifier: publicIdentifier,
      })),
    };

    // Make the POST request
    const response = await axios.post('http://localhost:8000/api/aiSimilarProfiles', payload);

    // Consolidate the response data
    const consolidatedArray = response.data.flatMap((entry: any) => {
      if (Array.isArray(entry)) {
        return entry;
      }
      return [entry];
    });

    return consolidatedArray;
  } catch (error) {
    console.error('Error fetching AI profile suggestions:', error);
    throw error;
  }
};
