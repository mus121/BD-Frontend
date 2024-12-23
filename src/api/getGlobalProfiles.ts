import { ExternalMessageEnum } from '@/constants/common';
import { globalProfilesResult } from '@/utils';

export const getGlobalProfileSearch = async (query: string, page: number = 0) => {
  try {
    const result = await globalProfilesResult<any>(
      ExternalMessageEnum.LI_GLOBAL_PROFILES,
      query,
      page,
    );
    console.log('Page', page);
    console.log('Result', result);
    return result;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    throw new Error('Failed to fetch global profiles');
  }
};
