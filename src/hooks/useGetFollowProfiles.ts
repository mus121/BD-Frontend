import { useQuery } from '@tanstack/react-query';
import { fetchFollowedProfiles } from '@/api/getLiProfiles';
import { FOLLOW_QUERY_KEYS } from '@/constants/query/processLi';

export const useFollowedProfiles = () => {
  const query = useQuery({
    queryKey: FOLLOW_QUERY_KEYS.followProfiles,
    queryFn: fetchFollowedProfiles,
  });
  return query;
};
