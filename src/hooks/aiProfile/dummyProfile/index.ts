import { aiProfile } from '@/api/aiProfile';
import { useQuery } from '@tanstack/react-query';
import { AI_PROFILE_KEY } from '@/constant/query/aiService';

export const useDummyAiProfile = () => {
  return useQuery({
    queryKey: [AI_PROFILE_KEY.dummyProfile],
    queryFn: aiProfile,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
