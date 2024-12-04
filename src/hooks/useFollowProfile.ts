import { useMutation } from '@tanstack/react-query';
import { submitData } from '@/services/Followlinkedinprofile';

const useFollowProfile = (setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>) => {
  const followMutationFn = async (action: {
    follow: boolean;
    identifier: string;
    entityUrn: string;
  }) => submitData(action.identifier, action.entityUrn, action.follow);

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
    },
    onError: error => {
      // eslint-disable-next-line no-console
      console.error('Error following/unfollowing:', error);
    },
  });

  return mutation;
};
export default useFollowProfile;
