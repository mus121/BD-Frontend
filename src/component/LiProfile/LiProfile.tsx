'use client';

import styles from './styles.module.scss';
import LiProfileCard from './LiProfileCard/index';
import LiProfileButton from './LiProfileButton';
import CheckBox from './CheckBox/index';

function LiProfile() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileContent}>
        <div className={styles.profileData}>
          <h5 className={styles.title}>LinkedIn Profile Confirmation</h5>
          <p className={styles.description}>
            We detected a LinkedIn profile associated with this browser. To continue, please confirm
            if this is the correct profile to link with your account.
          </p>
          <LiProfileCard />
          <CheckBox />
          <LiProfileButton />
        </div>
      </div>
    </div>
  );
}

export default LiProfile;
