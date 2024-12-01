import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import styles from './styles.module.scss';
import TertiaryButton from '../shared/button/TertiaryButton';
import Followingcheck from '../common/svg/Followingcheck';
import { submitData } from '../../services/Followlinkedinprofile';

type ProfileProps = {
  profile: {
    firstName: string;
    lastName: string;
    headline: string;
    profilePicture: string;
    publicIdentifier: string;
    entityUrn: string;
  };
  followprofile: string[];
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>;
};

const truncateHeadline = (headline: string, maxLength: number = 70): string => {
  if (!headline) return 'No headline available';
  return headline.length > maxLength ? `${headline.slice(0, maxLength)}...` : headline;
};

const followMutationFn = async (action: {
  follow: boolean;
  identifier: string;
  entityUrn: string;
}) => submitData(action.identifier, action.entityUrn, action.follow);

function ConnectionProfileCard({ profile, followprofile = [], setFollowprofile }: ProfileProps) {
  const { firstName, lastName, headline, profilePicture, publicIdentifier, entityUrn } = profile;

  const isFollowed = followprofile.includes(publicIdentifier);

  const mutation = useMutation({
    mutationFn: followMutationFn,
    onSuccess: (data, variables) => {
      setFollowprofile(prev =>
        variables.follow
          ? [...prev, variables.identifier]
          : prev.filter(value => value !== variables.identifier),
      );
    },
    onError: error => {
      console.error('Error following/unfollowing:', error);
    },
  });

  // Toggle follow/unfollow state
  const handleFollowToggle = () => {
    mutation.mutate({
      follow: !isFollowed,
      identifier: publicIdentifier,
      entityUrn,
    });
  };

  const headlineText = truncateHeadline(headline);

  return (
    <div className={styles.Cardcontainer}>
      <div className={styles.Userprofile}>
        <Image
          src={profilePicture || '/assets/images/Avatar.png'}
          alt={`${firstName} ${lastName}`}
          width={48}
          height={48}
          className={styles.Profileimg}
        />
        <div className={styles.Profile}>
          <h5>{`${firstName} ${lastName}`}</h5>
          <p title={headline}>{headlineText}</p>
        </div>
      </div>
      <TertiaryButton
        colorVariant='lightGray'
        type='button'
        text={
          isFollowed ? (
            <>
              <Followingcheck size={11.9} /> Following
            </>
          ) : (
            'Follow'
          )
        }
        tertiaryButtonClassName={`${styles.Followaccount} ${isFollowed && styles.followed}`}
        sizeVariant='base'
        onClick={handleFollowToggle}
        disabled={mutation.isLoading}
      />
    </div>
  );
}

export default ConnectionProfileCard;
