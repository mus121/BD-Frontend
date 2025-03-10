import { useQuery } from '@tanstack/react-query';
import { fetchUserId } from '@/api/me';

export const useUserId = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['userId'],
    queryFn: fetchUserId,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    userId: data || null,
    isLoading,
    isError,
  };
};
