import { useQuery } from '@tanstack/react-query';
import { LI_QUERY_KEYS } from '@/constants/query/linkedin';
import { fetchDropDownProfile, fetchGlobalProfile } from '@/api/search';

export const useDropDownProfile = (searchQuery: string) => {
  const query = useQuery({
    queryKey: [LI_QUERY_KEYS.getDropdownProfiles, searchQuery],
    queryFn: () => fetchDropDownProfile(searchQuery),
    enabled: !!searchQuery.trim(),
  });
  return query;
};

export const useGlobalProfile = (searchQuery: string, page: number, isSearchActive: boolean) => {
  const query = useQuery({
    queryKey: [LI_QUERY_KEYS.getGlobalProfiles, searchQuery, page],
    queryFn: () => fetchGlobalProfile(searchQuery, page),
    enabled: isSearchActive,
  });

  return query;
};
