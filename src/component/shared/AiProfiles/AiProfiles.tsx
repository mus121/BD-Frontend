import Location from '@/component/common/svg/Location';
import ProfileImg from '@/component/common/svg/ProfileImage';
import styles from './styles.module.scss';

function AiProfiles({
  personName,
  personLocation,
  personTitle,
  personCompany,
}: {
  personName: string;
  personLocation: string;
  personTitle: string;
  personCompany: string;
}) {
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
          {/* Tooltip for profile title */}
          <div className={styles.tooltip}>
            <p
              className={`${styles.profileTitle} ${truncatedProfileTitle !== profileTitle ? styles.truncatedName : ''}`}
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
