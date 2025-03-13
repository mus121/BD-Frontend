import { fetchLocation } from '@/api/location';
import { LI_QUERY_KEYS } from '@/constant/query/linkedin';
import { useQuery } from '@tanstack/react-query';

export const usefetchLocation = (publicIdentifier: string) => {
  const query = useQuery({
    queryKey: LI_QUERY_KEYS.getLiUserLocation(publicIdentifier),
    queryFn: () => fetchLocation(publicIdentifier),
  });

  return query;
};
