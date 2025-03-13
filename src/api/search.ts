import { ExternalMessageEnum } from '@/constants/common';
import { dropDownSearch } from '@/utils/index';
import { ProfileSearchResponse } from '@/interfaces/dropDown';
import { globalProfilesResult } from '@/utils';

export const fetchDropDownProfile = async (
  searchTerm: string,
): Promise<ProfileSearchResponse | undefined> => {
  try {
    const result = await dropDownSearch<ProfileSearchResponse>(
      ExternalMessageEnum.LI_GLOBAL_SEARCH,
      searchTerm,
    );
    return result;
  } catch (error) {
    return undefined;
  }
};

export const fetchGlobalProfile = async (query: string, page: number = 0) => {
  try {
    const result = await globalProfilesResult<any>(
      ExternalMessageEnum.LI_GLOBAL_PROFILES,
      query,
      page,
    );
    return result;
  } catch (error) {
    throw new Error('Failed to fetch global profiles');
  }
};
