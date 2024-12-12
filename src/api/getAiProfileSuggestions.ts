import axios from 'axios';
import { fetchFollowedProfiles } from './getLiProfiles';

export const getAiProfileSuggestions = async () => {
  try {
    // Fetch the list of followed profiles
    const followedProfiles = await fetchFollowedProfiles();

    // Get the first publicIdentifier from the list
    const firstPublicIdentifier = followedProfiles?.[0]; // Safely access the first element
    console.log('Profiles', firstPublicIdentifier);
    if (!firstPublicIdentifier) {
      console.warn('No publicIdentifier found in followed profiles.');
      return;
    }

    // Make the POST request with the first publicIdentifier
    const response = await axios.post('http://localhost:8000/api/aiService', {
      entity_urn: '', // Provide entity_urn if needed
      public_identifier: firstPublicIdentifier,
    });

    console.log('AI Profile Suggestions:', response.data);
  } catch (error) {
    console.error('Error fetching profile suggestions:', error);
  }
};
