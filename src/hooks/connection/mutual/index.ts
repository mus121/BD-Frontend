import { connection } from '@/api/connection';
import { LI_QUERY_KEYS } from '@/constant/query/linkedin';
import { useQuery } from '@tanstack/react-query';

export const useConnection = (currentPage: number) => {
  const query = useQuery({
    queryKey: LI_QUERY_KEYS.getLiMutualConnections(currentPage),
    queryFn: () => connection(currentPage),
  });

  return query;
};
