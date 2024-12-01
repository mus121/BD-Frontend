import { useQuery } from '@tanstack/react-query';
import { getsubmitData } from '@/app/api/Followinglinkedinprofile';

export const useLinkedInConnections = () =>
  useQuery({
    queryKey: ['linkedinConnections'],
    queryFn: getsubmitData,
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });