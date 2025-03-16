import { truncateHeadline } from '@/utils/stringUtils';
import { ProfileProps } from '@/interfaces/profile';
import { useRetrieveConnection } from '@/hooks/profile/connection';
import styles from './styles.module.scss';
import FollowCheck from '../shared/followCheck';
import TertiaryButton from '../shared/button/TertiaryButton';
import ProfileImage from '../shared/profileImage/index';

export default function ConnectionCard({
  profile,
  followProfile = [],
  setFollowProfile,
}: ProfileProps) {
  const { firstName, lastName, headline, profilePicture, publicIdentifier, entityUrn } = profile;

  const isFollowed = followProfile.includes(publicIdentifier || '');

  const { mutateAsync: toggleFollow } = useRetrieveConnection(setFollowProfile);

  const handleFollowToggle = async (): Promise<void> => {
    if (!publicIdentifier || !entityUrn) {
      return;
    }
    await toggleFollow({
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
