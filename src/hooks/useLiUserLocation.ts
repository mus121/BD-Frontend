import { useQuery } from '@tanstack/react-query';
import { getLiUserLocation } from '@/api/getLiUserLocation';
import { LI_QUERY_KEYS } from '@/constants/query/linkedin';

export const useLiUserLocation = (publicIdentifier: string) => {
  const query = useQuery({
    queryKey: LI_QUERY_KEYS.getLiUserLocation(publicIdentifier),
    queryFn: () => getLiUserLocation(publicIdentifier),
  });

  return query;
};
