import { ExternalMessageEnum } from '@/constants/common';
import { liuserlocation } from '@/utils/index';

type MessageResponse<T> = T | undefined;

export const getLiUserLocation = async <T>(
  publicIdentifier: string,
): Promise<MessageResponse<T>> => {
  try {
    const result = await liuserlocation<MessageResponse<T>>(
      ExternalMessageEnum.LI_LOCATION,
      publicIdentifier,
    );
    const { response } = result;
    if (!response) {
      throw new Error(`Response property is missing for publicIdentifier: ${publicIdentifier}.`);
    }

    return response;
  } catch (error) {
    console.error(
      `Error fetching LinkedIn user location for publicIdentifier: ${publicIdentifier}`,
      error,
    );
    throw error;
  }
};
