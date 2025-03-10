import { useMutation } from '@tanstack/react-query';
import { postAiFindProfileSuggestions } from '@/api/postAiFindProfileSuggestions';
import { useAppDispatch } from '@/hooks/rtk';
import { setIsProfileLoading, setProfiles } from '@/store/slices/aiFindSuggestProfiles';

export const useAiFindProfileSuggestions = () => {
  const dispatch = useAppDispatch();

  const mutation = useMutation({
    mutationFn: postAiFindProfileSuggestions,
    onSuccess: data => {
      dispatch(setIsProfileLoading(false));
      dispatch(setProfiles(data));
    },
    onError: error => {
      console.error('Error fetching suggestions:', error);
    },
  });

  return mutation;
};
