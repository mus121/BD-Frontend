import { postAiProfileSuggestions } from '@/api/postAiProfileSuggestions';
import { AI_SUGGEST_PROFILES_KEYS } from '@/constants/query/aiSuggestProfiles';
import { useQuery } from '@tanstack/react-query';

export const useAiProfileSuggestions = () => {
  const query = useQuery({
    queryKey: [AI_SUGGEST_PROFILES_KEYS.getAiSimilarProfiles()],
    queryFn: postAiProfileSuggestions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
  return query;
};
