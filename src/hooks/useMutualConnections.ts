import { useQuery } from '@tanstack/react-query';
import { getLiMutualConnections } from '@/api/getMutualConnections';
import { LI_QUERY_KEYS } from '@/constants/query/linkedin';

export const useLiMutualConnections = (currentPage: number) => {
  const query = useQuery({
    queryKey: LI_QUERY_KEYS.getLiMutualConnections(currentPage),
    queryFn: () => getLiMutualConnections(currentPage),
  });

  return query;
};
