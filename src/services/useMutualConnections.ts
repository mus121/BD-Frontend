import { useQuery } from '@tanstack/react-query';
import { getMutualConnections } from '@/hooks/getMutualConnections';

export const useMutualConnections = (currentPage: number) => {
  return useQuery({
    queryKey: ['mutualConnections', currentPage],
    queryFn: () => getMutualConnections(currentPage),
  });
};
