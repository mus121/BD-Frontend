import { useState } from 'react';
import Location from '@/component/common/svg/Location';
import TertiaryButton from '@/component/shared/button/TertiaryButton';
import ProfileImg from '@/component/common/svg/ProfileImage';
import Followingcheck from '../../common/svg/Followingcheck';
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
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowed(prev => !prev);
  };

  const followButton = isFollowed ? (
    <>
      <Followingcheck size={11.9} /> Following
    </>
  ) : (
    'Follow'
  );

  const profileTitle = `${personTitle} @ ${personCompany}`;
  const isTruncated = personName.length > 25;
  const truncatedProfileTitle =
    profileTitle.length > 40 ? `${profileTitle.slice(0, 40)}...` : profileTitle;

  return (
    <div className={styles.userProfile}>
      <div className={styles.userCard}>
        <ProfileImg size={40} />
        <div className={styles.profile}>
          {isTruncated ? (
            <div className={styles.tooltip}>
              <h5 className={`${styles.profileName} ${styles.profileElispse}`}>
                {`${personName.slice(0, 15)}...`}
              </h5>
              <span className={styles.tooltipText}>{personName}</span>
            </div>
          ) : (
            <h5 className={styles.profileName}>{personName}</h5>
          )}

          {/* Tooltip for profile title */}
          <div className={styles.tooltip}>
            <p
              className={`${styles.profileTitle} ${truncatedProfileTitle !== profileTitle ? styles.truncatedName : ''}`}
            >
              {truncatedProfileTitle}
            </p>
            {truncatedProfileTitle !== profileTitle && (
              <span className={styles.tooltipText}>{profileTitle}</span>
            )}
          </div>

          <p className={styles.locationContainer}>
            <span className={styles.location}>
              <Location size={16} />
            </span>
            {personLocation}
          </p>
        </div>
      </div>
      <TertiaryButton
        colorVariant='lightGray'
        type='button'
        text={followButton}
        tertiaryButtonClassName={`${styles.followAccount} ${isFollowed && styles.followed}`}
        sizeVariant='base'
        onClick={e => {
          e.stopPropagation();
          handleFollowToggle();
        }}
      />
    </div>
  );
}

export default AiProfiles;
