import { ExternalMessageEnum } from '@/constants/common';
import { dropDownSearch } from '@/utils/index';
import { ProfileSearchResponse } from '@/types/dropdownProfile';

export const getDropdownSearch = async (
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
