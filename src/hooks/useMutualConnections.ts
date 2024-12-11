import { useQuery } from '@tanstack/react-query';
import { getMutualConnections } from '@/api/getMutualConnections';
import { LI_QUERY_KEYS } from '@/constants/query/linkedin';

export const useMutualConnections = (currentPage: number) => {
  const query = useQuery({
    queryKey: LI_QUERY_KEYS.getMutualConnections(currentPage),
    queryFn: () => getMutualConnections(currentPage),
  });

  return query;
};
