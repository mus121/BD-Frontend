import { findProfile } from '@/api/aiProfile';
import { useAppDispatch } from '@/hooks/rtk';
import { setIsProfileLoading, setProfiles } from '@/slices/aiProfile';
import { useMutation } from '@tanstack/react-query';

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
