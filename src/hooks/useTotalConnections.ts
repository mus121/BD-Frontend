import { useQuery } from '@tanstack/react-query';
import { getLiTotalConnections } from '@/api/getTotalConnections';
import { LI_QUERY_KEYS } from '@/constants/query/linkedin';

export const useLiTotalConnections = () => {
  const query = useQuery({
    queryKey: LI_QUERY_KEYS.getLiTotalConnections,
    queryFn: () => getLiTotalConnections(),
  });

  return query;
};
