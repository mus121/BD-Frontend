import { useQuery } from '@tanstack/react-query';
import { fetchFollowedProfiles } from '@/api/getLiProfiles';
import { FOLLOW_QUERY_KEYS, GLOBAL_SEARCH_PROFILE } from '@/constants/query/processLi';
import { getGlobalProfileSearch } from '@/api/getGlobalProfiles';

export const useGetGlobalProfiles = (searchQuery: string, page: number) => {
  // console.log('object', searchQuery);
  // if (!searchQuery) {
  //   console.log('undefined query');
  // }
  const query = useQuery({
    queryKey: [GLOBAL_SEARCH_PROFILE.followProfiles, searchQuery, page],
    queryFn: () => getGlobalProfileSearch(searchQuery, page),
  });
  console.log('Pages', page);
  console.log('data ', query.data);
  return query;
};
