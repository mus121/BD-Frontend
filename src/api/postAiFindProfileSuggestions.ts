import axios from 'axios';

export const postAiFindProfileSuggestions = async (publicIdentifier: any) => {
  try {
    if (!publicIdentifier) {
      console.log('No Public Identifier FOund');
      return null;
    }
    const response = await axios.post('http://localhost:8000/api/findPerson', {
      entity_urn: '',
      public_identifier: publicIdentifier,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching AI profile suggestions:', error);
    throw error;
  }
};
