import { ExternalLiTotalConnection } from '@/constants/common';
import { totalConnection } from '@/services/totalConnection';
import { TotalConnectionsResponse } from '@/types/TotalConnectionsResponse';

export const getTotalConnections = async (): Promise<TotalConnectionsResponse | undefined> => {
  try {
    const result = await totalConnection<TotalConnectionsResponse>(
      ExternalLiTotalConnection.LI_TOTAL_CONNECTION,
    );

    // Adjust based on the actual structure of the result
    const { response } = result as any;

    if (!response) {
      throw new Error('Response property is missing in the resolved result.');
    }

    return response;
  } catch (error) {
    return undefined;
  }
};
