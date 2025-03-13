import { retrieveProfile } from '@/api/connection';
import { LI_PROFILE_QUERY_KEYS } from '@/constant/query/processLi';
import { useAppSelector } from '@/hooks/rtk';
import { useUserId } from '@/hooks/user';
import { RootState } from '@/store/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useProfile = () => {
  const queryClient = useQueryClient();
  const liProfileResponse = useAppSelector((state: RootState) => state.profile.miniProfile);
  const { userId } = useUserId();
  const liMutationFn = async () => {
    await retrieveProfile(
      userId ?? '',
      liProfileResponse.firstName ?? '',
      liProfileResponse.lastName ?? '',
      liProfileResponse.entityUrn ?? '',
      liProfileResponse.publicIdentifier ?? '',
    );
  };
  const mutation = useMutation({
    mutationFn: liMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: LI_PROFILE_QUERY_KEYS.liProfile });
    },
  });
  return mutation;
};

export const usePublicIdentifier = () =>
  useAppSelector(state => state.profile.miniProfile.publicIdentifier);
