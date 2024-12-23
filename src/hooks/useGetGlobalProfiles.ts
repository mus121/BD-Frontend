import { useQuery } from '@tanstack/react-query';
import { GLOBAL_SEARCH_PROFILE } from '@/constants/query/processLi';
import { getGlobalProfileSearch } from '@/api/getGlobalProfiles';

export const useGetGlobalProfiles = (searchQuery: string, page: number) => {
  const query = useQuery({
    queryKey: [GLOBAL_SEARCH_PROFILE.followProfiles, searchQuery, page],
    queryFn: () => getGlobalProfileSearch(searchQuery, page),
  });
  return query;
};
