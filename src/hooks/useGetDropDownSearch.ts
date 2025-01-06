import { useQuery } from '@tanstack/react-query';
import { LI_QUERY_KEYS } from '@/constants/query/linkedin';
import { getDropdownSearch } from '@/api/getDropDownSearch';

export const useGetDropDownSearch = (searchQuery: string) => {
  const query = useQuery({
    queryKey: [LI_QUERY_KEYS.getDropdownProfiles, searchQuery],
    queryFn: () => getDropdownSearch(searchQuery),
    enabled: !!searchQuery.trim(),
  });
  return query;
};
