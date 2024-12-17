import { ExternalMessageEnum } from '@/constants/common';
import { globalProfilesResult } from '@/utils';

export const getGlobalProfileSearch = async (query: string, Page: number = 0) => {
  console.log('Search term is:', query);

  try {
    const result = await globalProfilesResult<any>(
      ExternalMessageEnum.LI_GLOBAL_PROFILES,
      query,
      Page,
    );
    return result;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    throw new Error('Failed to fetch global profiles');
  }
};
