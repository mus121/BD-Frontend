import { fetchDropDownProfile } from '@/api/search';
import { LI_QUERY_KEYS } from '@/constant/query/linkedin';
import { useQuery } from '@tanstack/react-query';

export const useDropDownProfile = (searchQuery: string) => {
  const query = useQuery({
    queryKey: [LI_QUERY_KEYS.getDropdownProfiles, searchQuery],
    queryFn: () => fetchDropDownProfile(searchQuery),
    enabled: !!searchQuery.trim(),
  });
  return query;
};
