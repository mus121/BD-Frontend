import { getsubmitData } from '@/app/api/Followinglinkedinprofile';
import { useQuery } from '@tanstack/react-query';

const useLinkedInProfiles = () =>
  useQuery({
    queryKey: ['linkedinConnections'],
    queryFn: getsubmitData,
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });
