import { useMutation, useQueryClient } from '@tanstack/react-query';
import { liProfileData } from '@/api/postLiProfile';
import { LI_PROFILE_QUERY_KEYS } from '@/constants/query/processLi';
import { RootState } from '@/store/store';
import { useAppSelector } from './rtk';
import { useUserId } from './useMe';

const useLiProfile = () => {
  const queryClient = useQueryClient();
  const liProfileResponse = useAppSelector((state: RootState) => state.profile.miniProfile);
  const { userId } = useUserId();
  const liMutationFn = async () => {
    await liProfileData(
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

export default useLiProfile;
