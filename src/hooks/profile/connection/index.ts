import { fetchConnection, retrieveConnection } from '@/api/connection';
import { FOLLOW_QUERY_KEYS } from '@/constant/query/processLi';
import { useUserId } from '@/hooks/user';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useRetrieveConnection = (
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
      return retrieveConnection(userId, action.identifier, action.entityUrn, action.follow);
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

export const useFetchConnection = () => {
  const { userId } = useUserId();
  const query = useQuery({
    queryKey: FOLLOW_QUERY_KEYS.followProfiles,
    queryFn: () =>
      userId ? fetchConnection(userId) : Promise.reject(new Error('User ID is null')),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return query;
};
