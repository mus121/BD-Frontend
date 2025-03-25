import Location from '@/components/shared/svg/Location';
import ProfileImg from '@/components/shared/svg/ProfileImage';
import { AiProfilesProp } from '@/interfaces/aiProfile';
import styles from './styles.module.scss';

function AiProfiles({ personName, personLocation, personTitle, personCompany }: AiProfilesProp) {
  const profileTitle = `${personTitle}`;

  const truncatedProfileTitle =
    profileTitle.length > 45 ? `${profileTitle.slice(0, 45)}...` : profileTitle;

  return (
    <div className={styles.userProfile}>
      <div className={styles.userCard}>
        <ProfileImg size={40} />
        <div className={styles.profile}>
          <div className={styles.tooltip}>
            <h5 className={styles.profileName}>{personName}</h5>
          </div>
          <div className={styles.tooltip}>
            <p
              className={`${styles.profileTitle} ${
                truncatedProfileTitle !== profileTitle ? styles.truncatedName : ''
              }`}
            >
              {truncatedProfileTitle}
            </p>
            {truncatedProfileTitle !== profileTitle && (
              <span className={styles.tooltipText}>{personTitle}</span>
            )}
            <p className={styles.profileTitle}>@ {personCompany}</p>
          </div>
          <p className={styles.locationContainer}>
            <span className={styles.location}>
              <Location size={16} />
            </span>
            {personLocation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AiProfiles;
