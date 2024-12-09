import { useQuery } from '@tanstack/react-query';
import { getsubmitData } from '@/services/Followinglinkedinprofile';

export const useSubmitData = () => {
  return useQuery({
    queryKey: ['submitData'],
    queryFn: getsubmitData,
  });
};
