import { connectionCount } from '@/api/connection';
import { LI_QUERY_KEYS } from '@/constant/query/linkedin';
import { useQuery } from '@tanstack/react-query';

export const useConnectionCount = () => {
  const query = useQuery({
    queryKey: LI_QUERY_KEYS.getLiTotalConnections,
    queryFn: () => connectionCount(),
  });

  return query;
};
