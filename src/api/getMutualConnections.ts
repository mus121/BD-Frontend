import { ExternalMessageEnum } from '@/constants/common';
import { connectionProfile } from '@/utils/index';
import { MutualConnectionResponse } from '@/types/TMutualConnections';

type MessageResponse<T> = {
  response?: T;
};

export const getLiMutualConnections = async (
  start: number = 0,
): Promise<MutualConnectionResponse> => {
  try {
    const result = await connectionProfile<MessageResponse<MutualConnectionResponse>>(
      ExternalMessageEnum.LI_CONNECTION,
      start,
    );

    if (!result?.response) {
      throw new Error('Response property is missing in the resolved result.');
    }

    return result.response;
  } catch (error) {
    console.error('Error fetching mutual connections:', error);
    throw error;
  }
};
