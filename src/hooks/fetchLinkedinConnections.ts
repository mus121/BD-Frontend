import { useQuery } from '@tanstack/react-query';
import { getsubmitData } from '../services/Followinglinkedinprofile';

const useLinkedInProfiles = () =>
  useQuery({
    queryKey: ['linkedinConnections'],
    queryFn: getsubmitData,
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });
