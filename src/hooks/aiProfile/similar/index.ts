import { findProfile } from '@/api/aiProfile';
import { AI_SUGGEST_PROFILES_KEYS } from '@/constant/query/aiService';
import { useCurrentUser } from '@/hooks/user';
import { useQuery } from '@tanstack/react-query';

export const useSimilarProfile = () => {
  const { data } = useCurrentUser();
  const query = useQuery({
    queryKey: [AI_SUGGEST_PROFILES_KEYS.getAiSimilarProfiles()],
    queryFn: () =>
      data?.id ? findProfile(data?.id) : Promise.reject(new Error('User ID is null')),
    staleTime: Infinity,
    gcTime: Infinity,
  });
  return query;
};
