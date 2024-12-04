import { useState } from 'react';
import Location from '@/component/common/svg/Location';
import TertiaryButton from '@/component/shared/button/TertiaryButton';
import ProfileImage from '@/component/shared/profileImages/profileImages';
import Followingcheck from '../../common/svg/Followingcheck';
import styles from './styles.module.scss';

function UserProfile() {
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

  return (
    <div className={styles.userProfile}>
      <div className={styles.userCard}>
        <ProfileImage
          src='/assets/images/Suggest.png'
          alt='Profile picture of Bilal Kazmi'
          width={80}
          height={80}
          className={styles.profileImg}
        />
        <div className={styles.profile}>
          <h5 className={styles.profileName}>Bilal Kazmi</h5>
          <p className={styles.profileTitle}>UX Designer @ Google</p>
          <p className={styles.locationContainer}>
            <span className={styles.location}>
              <Location size={16} />
            </span>
            Islamabad, Pakistan
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

export default UserProfile;
