import { useQuery } from '@tanstack/react-query';
import { getTotalConnections } from '@/api/getTotalConnections';
import { LI_QUERY_KEYS } from '@/constants/query/linkedin';

export const useTotalConnections = () => {
  const query = useQuery({
    queryKey: LI_QUERY_KEYS.getTotalConnections(),
    queryFn: () => getTotalConnections(),
  });

  return query;
};
