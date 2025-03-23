import { getApi } from '@/utils/api';
import { ExternalMessageEnum } from '@/constant/common';
import { connectionProfile } from '@/utils/index';
import { MutualConnectionResponse } from '@/interfaces/connection';
import { totalConnection } from '@/utils/index';
import { ConnectionCount, MessageResponse } from '@/interfaces/connection';
import { postApi } from '@/utils/api';

export const connection = async (start: number = 0): Promise<MutualConnectionResponse> => {
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

export const connectionCount = async (): Promise<ConnectionCount | undefined> => {
  try {
    const result = await totalConnection<ConnectionCount>(ExternalMessageEnum.LI_TOTAL_CONNECTION);

    const { response } = result as any;

    if (!response) {
      throw new Error('Response property is missing in the resolved result.');
    }

    return response;
  } catch (error) {
    return undefined;
  }
};

export const fetchConnection = async (userId: number) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/private/linkedin/connection?userId=${userId}`;
  try {
    const response = await getApi(apiUrl);
    if (response?.response?.data)
      return response?.response?.data.map(
        ({ public_identifier }: { public_identifier: string }) => public_identifier,
      );
    return [];
  } catch (error) {
    return null;
  }
};

export const fetchAllConnection = async (userId: number) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/private/linkedin/connection?userId=${userId}`;
  try {
    const response = await getApi(apiUrl);
    if (response?.response?.data) return response?.response?.data;
  } catch (error) {
    return null;
  }
};

export const retrieveConnection = async (
  userId: number,
  firstName: string,
  lastName: string,
  headline: string,
  profilePicture: string,
  publicIdentifier: string,
  entityUrn: string,
  connectionStatus: boolean,
) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/private/linkedin/follow`;
  const requestBody = {
    userId,
    firstName,
    lastName,
    headline,
    profilePicture,
    publicIdentifier,
    entityUrn,
    connectionStatus,
  };
  try {
    const response = await postApi(apiUrl, requestBody);
    return response;
  } catch (error) {
    console.error('Failed to submit data:', error);
    return null;
  }
};

export const retrieveProfile = async (
  userId: number,
  firstName: string,
  lastName: string,
  publicIdentifier: string,
  entityUrn: string,
) => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/private/linkedin/profile`;
    const requestBody = {
      userId,
      firstName,
      lastName,
      publicIdentifier,
      entityUrn,
    };

    const response = await postApi(apiUrl, requestBody);
    console.log('API Response:', response);
  } catch (error) {
    console.error('Failed to submit data:', error);
  }
};
