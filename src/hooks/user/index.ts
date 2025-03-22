import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUser } from '@/api/me';
import { USER_QUERY_KEY } from '@/constant/query/processLi';

export const useCurrentUser = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [USER_QUERY_KEY.userKey], // Ensure it's an array
    queryFn: fetchCurrentUser,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  console.log('Current User:', data?.id);

  return {
    data,
    isLoading,
    isError,
  };
};
