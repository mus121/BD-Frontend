import { ExternalMessageEnum } from '@/constants/common';
import { LocationResponse } from '@/types/Location';
import { liuserlocation } from '@/utils/index';

// Define the shape of the response returned by liuserlocation
type LiUserLocationResult = {
  response?: LocationResponse;
};

// Ensure that the response is of the correct type
type MessageResponse<T> = T | undefined;

export const getLiUserLocation = async (
  publicIdentifier: string,
): Promise<LocationResponse | undefined> => {
  try {
    // Assuming liuserlocation fetches data and returns a response
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
