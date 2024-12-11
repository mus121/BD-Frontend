import { ExternalLiConnection } from '@/constants/common';
import { connectionProfile } from '@/services/connectionsProfile';
import { MutualConnectionsResponse } from '@/types/MutualConnectionsResponse';

export const getMutualConnections = async (
  start: number = 0,
): Promise<MutualConnectionsResponse> => {
  try {
    const result = await connectionProfile<MutualConnectionsResponse>(
      ExternalLiConnection.LI_CONNECTION,
      start,
    );

    const { response } = result;
    if (!response) {
      throw new Error('Response property is missing in the resolved result.');
    }

    return response;
  } catch (error) {
    console.error('Error fetching mutual connections:', error);
    throw error;
  }
};
