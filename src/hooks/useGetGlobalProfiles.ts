import { useQuery } from '@tanstack/react-query';
import { fetchFollowedProfiles } from '@/api/getLiProfiles';
import { FOLLOW_QUERY_KEYS, GLOBAL_SEARCH_PROFILE } from '@/constants/query/processLi';
import { getGlobalProfileSearch } from '@/api/getGlobalProfiles';

export const useGetGlobalProfiles = (searchQuery?: string, Page: number = 0) => {
  console.log('object', searchQuery);
  if (!searchQuery) {
    console.log('undefined query');
  }
  const query = useQuery({
    queryKey: [GLOBAL_SEARCH_PROFILE.followProfiles, searchQuery],
    queryFn: () => getGlobalProfileSearch(searchQuery, Page),
  });
  console.log('data ', query.data);
  return query;
};
