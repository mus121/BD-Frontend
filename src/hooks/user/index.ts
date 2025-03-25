import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUser } from '@/api/me';
import { USER_QUERY_KEY } from '@/constant/query/processLi';

export const useCurrentUser = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [USER_QUERY_KEY.userKey],
    queryFn: fetchCurrentUser,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    isError,
  };
};
