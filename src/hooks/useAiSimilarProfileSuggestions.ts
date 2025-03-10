import { postAiProfileSuggestions } from '@/api/postAiProfileSuggestions';
import { AI_SUGGEST_PROFILES_KEYS } from '@/constants/query/aiSuggestProfiles';
import { useQuery } from '@tanstack/react-query';
import { useUserId } from './useMe';

export const useAiProfileSuggestions = () => {
  const { userId } = useUserId();
  const query = useQuery({
    queryKey: [AI_SUGGEST_PROFILES_KEYS.getAiSimilarProfiles()],
    queryFn: () =>
      userId ? postAiProfileSuggestions(userId) : Promise.reject(new Error('User ID is null')),
    staleTime: Infinity,
    gcTime: Infinity,
  });
  return query;
};
