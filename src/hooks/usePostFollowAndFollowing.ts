import { useMutation, useQueryClient } from '@tanstack/react-query';
import { liProfileData } from '@/api/postLiProfilesConnections';
import { FOLLOW_QUERY_KEYS } from '@/constants/query/processLi';

const useFollowAndFollowing = (
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const followMutationFn = async (action: {
    follow: boolean;
    identifier: string;
    entityUrn: string;
  }) => liProfileData(action.identifier, action.entityUrn, action.follow);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: followMutationFn,
    onSuccess: (data, variables) => {
      setFollowprofile(
        prev =>
          variables.follow
            ? [...prev, variables.identifier]
            : prev.filter(value => value !== variables.identifier),
        // eslint-disable-next-line function-paren-newline
      );
      queryClient.invalidateQueries({ queryKey: FOLLOW_QUERY_KEYS.followProfiles });
      // queryClient.resetQueries({ queryKey: ['submitData'] });
    },
    onError: error => {
      // eslint-disable-next-line no-console
      console.error('Error following/unfollowing:', error);
    },
  });

  return mutation;
};
export default useFollowAndFollowing;
