import { useQuery } from '@tanstack/react-query';
import { connection, connectionCount } from '@/api/connection';
import { fetchLocation } from '@/api/location';
import { LI_QUERY_KEYS } from '@/constants/query/linkedin';

export const useConnection = (currentPage: number) => {
  const query = useQuery({
    queryKey: LI_QUERY_KEYS.getLiMutualConnections(currentPage),
    queryFn: () => connection(currentPage),
  });

  return query;
};

export const useConnectionCount = () => {
  const query = useQuery({
    queryKey: LI_QUERY_KEYS.getLiTotalConnections,
    queryFn: () => connectionCount(),
  });

  return query;
};

export const usefetchLocation = (publicIdentifier: string) => {
  const query = useQuery({
    queryKey: LI_QUERY_KEYS.getLiUserLocation(publicIdentifier),
    queryFn: () => fetchLocation(publicIdentifier),
  });

  return query;
};
