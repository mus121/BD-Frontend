import { useQuery } from '@tanstack/react-query';
import { fetchUserId } from '@/api/me';
import { USER_QUERY_KEY } from '@/constant/query/processLi';

export const useUserId = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: USER_QUERY_KEY.userKey,
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
