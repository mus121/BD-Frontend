import Image from 'next/image';
import useFollowProfile from '@/hooks/useFollowProfile';
import styles from './styles.module.scss';
import TertiaryButton from '../shared/button/TertiaryButton';
import Followingcheck from '../common/svg/Followingcheck';

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

  const parts = headline.split('•');
  const lastPart = parts[parts.length - 1]?.trim() || '';

  return lastPart.length > maxLength ? `${lastPart.slice(0, maxLength)}...` : lastPart;
};

function ConnectionProfileCard({ profile, followprofile = [], setFollowprofile }: ProfileProps) {
  const { firstName, lastName, headline, profilePicture, publicIdentifier, entityUrn } = profile;

  const isFollowed = followprofile.includes(publicIdentifier);

  // Use the custom hook for follow/unfollow mutation
  const mutation = useFollowProfile(setFollowprofile);

  // Toggle follow/unfollow state
  const handleFollowToggle = () => {
    mutation.mutate({
      follow: !isFollowed,
      identifier: publicIdentifier,
      entityUrn,
    });
  };

  const headlineText = truncateHeadline(headline);

  const followButton = isFollowed ? (
    <>
      <Followingcheck size={11.9} /> Following
    </>
  ) : (
    'Follow'
  );
  return (
    <div className={styles.cardContainer}>
      <div className={styles.userProfile}>
        <Image
          src={profilePicture || '/assets/images/Avatar.png'}
          alt={`${firstName} ${lastName}`}
          width={48}
          height={48}
          className={styles.profileImg}
        />
        <div className={styles.profile}>
          <h5 className={styles.profileName}>{`${firstName} ${lastName}`}</h5>
          <p
            title={headline}
            className={styles.headline}
          >
            {headlineText}
          </p>
        </div>
      </div>
      <TertiaryButton
        colorVariant='lightGray'
        type='button'
        text={followButton}
        tertiaryButtonClassName={`${styles.followAccount} ${isFollowed && styles.followed}`}
        sizeVariant='base'
        onClick={handleFollowToggle}
        // disabled={mutation.isLoading}
      />
    </div>
  );
}

export default ConnectionProfileCard;
