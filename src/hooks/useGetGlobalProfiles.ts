import { useQuery } from '@tanstack/react-query';
import { LI_QUERY_KEYS } from '@/constants/query/linkedin';
import { getGlobalProfileSearch } from '@/api/getGlobalProfiles';

export const useGetGlobalProfiles = (
  searchQuery: string,
  page: number,
  isSearchActive: boolean,
) => {
  const query = useQuery({
    queryKey: [LI_QUERY_KEYS.getGlobalProfiles, searchQuery, page],
    queryFn: () => getGlobalProfileSearch(searchQuery, page),
    enabled: isSearchActive,
  });

  return query;
};
