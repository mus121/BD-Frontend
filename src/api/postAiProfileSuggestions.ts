import axios from 'axios';
import { fetchFollowedProfiles } from './getLiProfiles';

export const postAiProfileSuggestions = async () => {
  try {
    // Fetch the list of followed profiles
    const followedProfiles = await fetchFollowedProfiles();
    // Get the first publicIdentifier
    const firstPublicIdentifier = followedProfiles?.[0];

    if (!firstPublicIdentifier) {
      throw new Error('No publicIdentifier found in followed profiles.');
    }

    // Make the POST request with the first publicIdentifier
    const response = await axios.post('http://localhost:8000/api/aiService', {
      entity_urn: '',
      public_identifier: firstPublicIdentifier,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching AI profile suggestions:', error);
    throw error;
  }
};
