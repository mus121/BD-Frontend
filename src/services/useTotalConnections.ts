import { useQuery } from '@tanstack/react-query';
import { getTotalConnections } from '@/hooks/getTotalConnections';

export const useTotalConnections = () => {
  return useQuery({
    queryKey: ['totalConnections'],
    queryFn: getTotalConnections,
  });
};
