import { truncateHeadline } from '@/utils/stringUtils';
import { ProfileProps } from '@/types/TProfileCard';
import usePostFollowAndFollowing from '@/hooks/usePostFollowAndFollowing';
import styles from './styles.module.scss';
import FollowCheck from '../shared/FollowCheck';
import TertiaryButton from '../shared/Buttons/TertiaryButton';
import ProfileImage from '../shared/ProfileImages/index';

function LiMutualAndGlobalConnection({
  profile,
  followProfile = [],
  setFollowProfile,
}: ProfileProps) {
  const { firstName, lastName, headline, profilePicture, publicIdentifier, entityUrn } = profile;

  const isFollowed = followProfile.includes(publicIdentifier || '');

  const { mutate: toggleFollow } = usePostFollowAndFollowing(setFollowProfile);

  const handleFollowToggle = () => {
    if (!publicIdentifier || !entityUrn) {
      return;
    }

    toggleFollow({
      follow: !isFollowed,
      identifier: publicIdentifier,
      entityUrn,
    });
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.profileInfo}>
        <ProfileImage
          src={profilePicture || '/assets/images/LiDefault.png'}
          alt={`${firstName} ${lastName}`}
          width={48}
          height={48}
          className={styles.profileImage}
        />
        <div className={styles.textInfo}>
          <h5 className={styles.profileName}>{`${firstName} ${lastName}`}</h5>
          <p
            className={styles.profileHeadline}
            title={headline || 'No headline available'}
          >
            {truncateHeadline(headline)}
          </p>
        </div>
      </div>

      <TertiaryButton
        colorVariant='lightGray'
        type='button'
        text={<FollowCheck isFollowed={isFollowed} />}
        sizeVariant='base'
        onClick={handleFollowToggle}
        tertiaryButtonClassName={`${styles.followButton} ${isFollowed && styles.followed}`}
      />
    </div>
  );
}

export default LiMutualAndGlobalConnection;
