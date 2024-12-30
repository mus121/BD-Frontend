import axios from 'axios';
import { fetchFollowedProfiles } from './getLiProfiles';

export const postAiProfileSuggestions = async () => {
  try {
    const followPublicIdentifier = await fetchFollowedProfiles();

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
    // If no cached data, return the fresh response data
    return consolidatedArray;
  } catch (error) {
    console.error('Error fetching AI profile suggestions:', error);
    throw error;
  }
};
