import { useMutation, useQuery } from '@tanstack/react-query';
import { findProfile } from '@/api/aiProfile';
import { useAppDispatch } from '@/hooks/rtk';
import { setIsProfileLoading, setProfiles } from '@/slices/aiProfile';
import { AI_SUGGEST_PROFILES_KEYS } from '@/constants/query/aiSuggestProfiles';
import { useUserId } from './user';

export const useFindProfile = () => {
  const dispatch = useAppDispatch();

  const mutation = useMutation({
    mutationFn: findProfile,
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
