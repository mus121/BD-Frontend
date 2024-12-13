import { postAiProfileSuggestions } from '@/api/postAiProfileSuggestions';
import { useQuery } from '@tanstack/react-query';

// Correctly define the useMutation hook
export const useAiProfileSuggestions = () => {
  const query = useQuery({
    queryKey: ['profileSuggestion'],
    queryFn: postAiProfileSuggestions,
  });
  return query;
};
