import useFollowProfile from '@/hooks/useFollowProfile';
import { truncateHeadline } from '@/utils/stringUtils';
import { ProfileProps } from '@/types/profileCard';
import styles from './styles.module.scss';
import FollowText from '../shared/followText';
import TertiaryButton from '../shared/button/TertiaryButton';
import ProfileImage from '../shared/profileImages/index';

function ConnectionProfileCard({ profile, followprofile = [], setFollowprofile }: ProfileProps) {
  const { firstName, lastName, headline, profilePicture, publicIdentifier, entityUrn } = profile;

  const isFollowed = followprofile.includes(publicIdentifier);

  const mutation = useFollowProfile(setFollowprofile);

  const handleFollowToggle = () => {
    mutation.mutate({ follow: !isFollowed, identifier: publicIdentifier, entityUrn });
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.userProfile}>
        <ProfileImage
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
            {truncateHeadline(headline)}
          </p>
        </div>
      </div>
      <TertiaryButton
        colorVariant='lightGray'
        type='button'
        text={<FollowText isFollowed={isFollowed} />}
        tertiaryButtonClassName={`${styles.followAccount} ${isFollowed && styles.followed}`}
        sizeVariant='base'
        onClick={handleFollowToggle}
        // disabled={mutation.isLoading}
      />
    </div>
  );
}

export default ConnectionProfileCard;
