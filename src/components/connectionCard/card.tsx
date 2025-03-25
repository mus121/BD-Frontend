import { truncateHeadline } from '@/utils/stringUtils';
import { ProfileProps } from '@/interfaces/profile';
import { useRetrieveConnection } from '@/hooks/profile/connection';
import styles from './styles.module.scss';
import ProfileImage from '../shared/profileImage/index';
import Check from '../shared/checkBox/enable/enable';

export default function connectionCard({
  profile,
  followProfile = [],
  setFollowProfile,
}: ProfileProps & { followProfile: string[] }) {
  const { firstName, lastName, headline, profilePicture, publicIdentifier, entityUrn } = profile;

  const isFollowed = followProfile.includes(publicIdentifier || '');

  const { mutateAsync: toggleFollow } = useRetrieveConnection(setFollowProfile);
  const handleConnectionToggle = async (): Promise<void> => {
    if (!publicIdentifier || !entityUrn) {
      return;
    }
    await toggleFollow({
      firstName,
      lastName,
      headline,
      profilePicture,
      follow: !isFollowed,
      identifier: publicIdentifier,
      entityUrn,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileInfo}>
        <Check
          size={24}
          className={styles.myCustomCheckbox}
          onClick={handleConnectionToggle}
          isFollowed={isFollowed}
        />
        <div className={styles.cardBody}>
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
      </div>
    </div>
  );
}
