import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FOLLOW_QUERY_KEYS } from '@/constants/query/processLi';
import { liConnection } from '@/api/postLiConnections';
import { useUserId } from './useMe';

const usePostFollowAndFollowing = (
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const queryClient = useQueryClient();
  const { userId } = useUserId();
  const followMutationFn = async (action: {
    follow: boolean;
    identifier: string;
    entityUrn: string;
  }) => {
    if (userId) {
      return liConnection(userId, action.identifier, action.entityUrn, action.follow);
    }
    throw new Error('User ID is null');
  };
  const mutation = useMutation({
    mutationFn: followMutationFn,

    onMutate: async variables => {
      await queryClient.cancelQueries({ queryKey: FOLLOW_QUERY_KEYS.followProfiles });

      const previousFollowProfiles = queryClient.getQueryData<string[]>(
        FOLLOW_QUERY_KEYS.followProfiles,
      );

      queryClient.setQueryData<string[]>(FOLLOW_QUERY_KEYS.followProfiles, (oldData = []) => {
        if (variables.follow) {
          return [...oldData, variables.identifier];
        }
        return oldData.filter(id => id !== variables.identifier);
      });

      setFollowprofile(prev =>
        variables.follow
          ? [...prev, variables.identifier]
          : prev.filter(value => value !== variables.identifier),
      );

      return { previousFollowProfiles };
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLLOW_QUERY_KEYS.followProfiles });
    },

    onError: (error, variables, context) => {
      queryClient.setQueryData<string[]>(
        FOLLOW_QUERY_KEYS.followProfiles,
        context?.previousFollowProfiles ?? [],
      );
      setFollowprofile(context?.previousFollowProfiles ?? []);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: FOLLOW_QUERY_KEYS.followProfiles });
    },
  });

  return mutation;
};

export default usePostFollowAndFollowing;
