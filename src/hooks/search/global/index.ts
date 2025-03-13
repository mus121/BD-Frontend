import { fetchGlobalProfile } from '@/api/search';
import { LI_QUERY_KEYS } from '@/constant/query/linkedin';
import { useQuery } from '@tanstack/react-query';

export const useGlobalProfile = (searchQuery: string, page: number, isSearchActive: boolean) => {
  const query = useQuery({
    queryKey: [LI_QUERY_KEYS.getGlobalProfiles, searchQuery, page],
    queryFn: () => fetchGlobalProfile(searchQuery, page),
    enabled: isSearchActive,
  });

  return query;
};
