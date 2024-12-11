import { ExternalLiSearchProfile } from '@/constants/common';
import { profileSearch } from '@/services/profileSearch';
import { ProfileSearchResponse } from '@/types/ProfileSearchResponse';

export const getProfileSearch = async (
  searchTerm: string,
): Promise<ProfileSearchResponse | undefined> => {
  try {
    const result = await profileSearch<ProfileSearchResponse>(
      ExternalLiSearchProfile.LI_GLOBAL_SEARCH,
      searchTerm,
    );
    return result;
  } catch (error) {
    return undefined;
  }
};
