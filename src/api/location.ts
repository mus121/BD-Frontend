import { ExternalMessageEnum } from '@/constant/common';
import { LocationResponse } from '@/interfaces/profile';
import { liuserlocation } from '@/utils/index';

type LiUserLocationResult = {
  response?: LocationResponse;
};

export const fetchLocation = async (
  publicIdentifier: string,
): Promise<LocationResponse | undefined> => {
  try {
    const result = await liuserlocation<LiUserLocationResult>(
      ExternalMessageEnum.LI_LOCATION,
      publicIdentifier,
    );
    if (result?.response) {
      return result.response;
    }
    return undefined;
  } catch (error) {
    console.error(
      `Error fetching LinkedIn user location for publicIdentifier: ${publicIdentifier}`,
      error,
    );
    throw error;
  }
};
