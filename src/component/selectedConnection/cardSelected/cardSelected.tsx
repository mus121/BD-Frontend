import { truncateHeadline } from '@/utils/stringUtils';
import { ProfileProps } from '@/interfaces/profile';
import { useFetchRetrieveConnection } from '@/hooks/profile/fetch/index';
import styles from './styles.module.scss';
import ProfileImage from '../../shared/profileImage/index';
import Close from '@/component/shared/svg/Close';

export default function SelectedCard({ profile }: { profile: any }) {
  const { firstName, lastName, headline, profilePicture, publicIdentifier, entityUrn } = profile;

  const { mutateAsync: toggleFollow } = useFetchRetrieveConnection(publicIdentifier);
  const handleConnectionToggle = async (): Promise<void> => {
    if (!publicIdentifier || !entityUrn) {
      return;
    }
    await toggleFollow({
      firstName,
      lastName,
      headline,
      profilePicture,
      follow: false,
      identifier: publicIdentifier,
      entityUrn,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileInfo}>
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
      <button
        className={styles.closeButton}
        onClick={handleConnectionToggle}
      >
        <Close size={20} />
      </button>
    </div>
  );
}
