import { ExternalMessageEnum } from '@/constants/common';
import { profileSearch } from '@/utils/index';
import { ProfileSearchResponse } from '@/types/ProfileSearchResponse';

export const getProfileSearch = async (
  searchTerm: string,
): Promise<ProfileSearchResponse | undefined> => {
  try {
    const result = await profileSearch<ProfileSearchResponse>(
      ExternalMessageEnum.LI_GLOBAL_SEARCH,
      searchTerm,
    );
    return result;
  } catch (error) {
    return undefined;
  }
};
