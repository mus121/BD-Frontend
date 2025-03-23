import { fetchConnection, retrieveConnection, fetchAllConnection } from '@/api/connection';
import { FOLLOW_QUERY_KEYS } from '@/constant/query/processLi';
import { useCurrentUser } from '@/hooks/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useFetchRetrieveConnection = (publicIdentifier: string) => {
  const queryClient = useQueryClient();
  const { data } = useCurrentUser();

  const connectionMutationFunc = async (action: {
    follow: boolean;
    firstName: string;
    lastName: string;
    headline: string;
    profilePicture: string;
    identifier: string;
    entityUrn: string;
  }) => {
    if (data?.id) {
      return retrieveConnection(
        data?.id,
        action.firstName,
        action.lastName,
        action.headline,
        action.profilePicture,
        action.identifier,
        action.entityUrn,
        action.follow,
      );
    }
    throw new Error('User ID is null');
  };

  const mutation = useMutation({
    mutationFn: connectionMutationFunc,

    onMutate: async variables => {
      await queryClient.cancelQueries({ queryKey: [FOLLOW_QUERY_KEYS.followProfiles] });

      const previousFollowProfiles = queryClient.getQueryData<string[]>(
        FOLLOW_QUERY_KEYS.followProfiles,
      );

      queryClient.setQueryData<string[]>(FOLLOW_QUERY_KEYS.followProfiles, (oldData = []) => {
        return variables.follow
          ? [...oldData, variables.identifier]
          : oldData.filter(id => id !== variables.identifier);
      });

      queryClient.setQueryData<{ public_identifier: string }[]>(
        FOLLOW_QUERY_KEYS.fetchAllConnection,
        (oldData = []) => {
          return oldData.filter(item => item.public_identifier !== publicIdentifier);
        },
      );

      return { previousFollowProfiles };
    },

    onError: (error, variables, context) => {
      if (context?.previousFollowProfiles) {
        queryClient.setQueryData<string[]>(
          FOLLOW_QUERY_KEYS.followProfiles,
          context.previousFollowProfiles,
        );
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [FOLLOW_QUERY_KEYS.fetchAllConnection] });
    },
  });

  return mutation;
};
