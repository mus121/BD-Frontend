import { useMutation, useQueryClient } from '@tanstack/react-query';
import { liProfileData } from '@/api/postLiProfilesConnections';
import { FOLLOW_QUERY_KEYS } from '@/constants/query/processLi';

const usePostFollowAndFollowing = (
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const queryClient = useQueryClient();

  // Mutation function for POST API call
  const followMutationFn = async (action: {
    follow: boolean;
    identifier: string;
    entityUrn: string;
  }) => liProfileData(action.identifier, action.entityUrn, action.follow);

  // Mutation hook
  const mutation = useMutation({
    mutationFn: followMutationFn,

    // Optimistic Update for better UX
    onMutate: async variables => {
      // Cancel outgoing queries to prevent race conditions
      await queryClient.cancelQueries({ queryKey: FOLLOW_QUERY_KEYS.followProfiles });

      // Snapshot previous state
      const previousFollowProfiles = queryClient.getQueryData<string[]>(
        FOLLOW_QUERY_KEYS.followProfiles,
      );

      // Optimistically update the cache
      queryClient.setQueryData<string[]>(FOLLOW_QUERY_KEYS.followProfiles, (oldData = []) => {
        if (variables.follow) {
          return [...oldData, variables.identifier];
        } else {
          return oldData.filter(id => id !== variables.identifier);
        }
      });

      // Update local state
      setFollowprofile(prev =>
        variables.follow
          ? [...prev, variables.identifier]
          : prev.filter(value => value !== variables.identifier),
      );

      // Return context for rollback in case of error
      return { previousFollowProfiles };
    },

    // Handle successful mutation
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLLOW_QUERY_KEYS.followProfiles });
    },

    // Rollback on error
    onError: (error, variables, context) => {
      console.error('Error following/unfollowing:', error);
      queryClient.setQueryData<string[]>(
        FOLLOW_QUERY_KEYS.followProfiles,
        context?.previousFollowProfiles ?? [],
      );
      setFollowprofile(context?.previousFollowProfiles ?? []);
    },

    // Optional: Refetch after mutation (ensures server state consistency)
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: FOLLOW_QUERY_KEYS.followProfiles });
    },
  });

  return mutation;
};

export default usePostFollowAndFollowing;
