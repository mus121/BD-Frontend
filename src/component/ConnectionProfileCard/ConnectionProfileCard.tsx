import { truncateHeadline } from '@/utils/stringUtils';
import { ProfileProps } from '@/types/profileCard';
import usePostFollowAndFollowing from '@/hooks/usePostFollowAndFollowing';
import styles from './styles.module.scss';
import FollowText from '../shared/followText';
import TertiaryButton from '../shared/button/TertiaryButton';
import ProfileImage from '../shared/profileImages/index';

function ConnectionProfileCard({ profile, followprofile = [], setFollowprofile }: ProfileProps) {
  const { firstName, lastName, headline, profilePicture, publicIdentifier, entityUrn } = profile;

  // Check if the profile is already followed
  const isFollowed = followprofile.includes(publicIdentifier);

  // Mutation for toggling follow status
  const { mutate: toggleFollow } = usePostFollowAndFollowing(setFollowprofile);

  // Handler for toggling follow state
  const handleFollowToggle = () => {
    toggleFollow({ follow: !isFollowed, identifier: publicIdentifier, entityUrn });
  };

  return (
    <div className={styles.cardContainer}>
      {/* Profile Info Section */}
      <div className={styles.profileInfo}>
        <ProfileImage
          src={profilePicture || '/assets/images/Avatar.png'}
          alt={`${firstName} ${lastName}`}
          width={48}
          height={48}
          className={styles.profileImage}
        />
        <div className={styles.textInfo}>
          <h5 className={styles.profileName}>{`${firstName} ${lastName}`}</h5>
          <p
            className={styles.profileHeadline}
            title={headline}
          >
            {truncateHeadline(headline)}
          </p>
        </div>
      </div>

      {/* Follow Button Section */}
      <TertiaryButton
        colorVariant='lightGray'
        type='button'
        text={<FollowText isFollowed={isFollowed} />}
        sizeVariant='base'
        onClick={handleFollowToggle}
        tertiaryButtonClassName={`${styles.followButton} ${isFollowed && styles.followed}`}
      />
    </div>
  );
}

export default ConnectionProfileCard;
