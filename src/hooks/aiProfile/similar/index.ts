import { findProfile } from '@/api/aiProfile';
import { AI_SUGGEST_PROFILES_KEYS } from '@/constant/query/aiSuggestProfiles';
import { useUserId } from '@/hooks/user';
import { useQuery } from '@tanstack/react-query';

export const useSimilarProfile = () => {
  const { userId } = useUserId();
  const query = useQuery({
    queryKey: [AI_SUGGEST_PROFILES_KEYS.getAiSimilarProfiles()],
    queryFn: () => (userId ? findProfile(userId) : Promise.reject(new Error('User ID is null'))),
    staleTime: Infinity,
    gcTime: Infinity,
  });
  return query;
};
