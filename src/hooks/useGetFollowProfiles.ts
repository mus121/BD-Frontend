import { useQuery } from '@tanstack/react-query';
import { fetchFollowedProfiles } from '@/api/getLiProfiles';
import { FOLLOW_QUERY_KEYS } from '@/constants/query/processLi';
import { useUserId } from './useMe';

export const useFollowedProfiles = () => {
  const { userId } = useUserId();
  const query = useQuery({
    queryKey: FOLLOW_QUERY_KEYS.followProfiles,
    queryFn: () =>
      userId ? fetchFollowedProfiles(userId) : Promise.reject(new Error('User ID is null')),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return query;
};
