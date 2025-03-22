import { fetchConnection, retrieveConnection } from '@/api/connection';
import { FOLLOW_QUERY_KEYS } from '@/constant/query/processLi';
import { useCurrentUser } from '@/hooks/user';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useRetrieveConnection = (
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const queryClient = useQueryClient();
  const { data } = useCurrentUser();
  const connectionMutationFunc = async (action: {
    follow: boolean;
    identifier: string;
    entityUrn: string;
  }) => {
    if (data?.id) {
      return retrieveConnection(data?.id, action.identifier, action.entityUrn, action.follow);
    }
    throw new Error('User ID is null');
  };
  const mutation = useMutation({
    mutationFn: connectionMutationFunc,

    onMutate: async variables => {
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
    onError: (error, variables, context) => {
      queryClient.setQueryData<string[]>(
        FOLLOW_QUERY_KEYS.followProfiles,
        context?.previousFollowProfiles ?? [],
      );
      setFollowprofile(context?.previousFollowProfiles ?? []);
    },
  });

  return mutation;
};

export const useFetchConnection = () => {
  const { data } = useCurrentUser();
  const query = useQuery({
    queryKey: FOLLOW_QUERY_KEYS.followProfiles,
    queryFn: () =>
      data?.id ? fetchConnection(data?.id) : Promise.reject(new Error('User ID is null')),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return query;
};
