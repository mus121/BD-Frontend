import { useQuery } from '@tanstack/react-query';
import { getFollow } from '@/api/getLiProfiles';
import { FOLLOW_QUERY_KEYS } from '@/constants/query/processLi';

export const useFollow = () => {
  const query = useQuery({
    queryKey: FOLLOW_QUERY_KEYS.FollowProfile(),
    queryFn: getFollow,
  });
  return query;
};
