import ProfileImage from '@/components/shared/profileImage';
import styles from './styles.module.scss';
import Close from '@/components/shared/svg/Close';
import { use, useEffect, useState } from 'react';

export default function SelectedProfilesList({ selectedProfiles }: { selectedProfiles: any[] }) {
  const [profilePills, setPillsProfile] = useState(selectedProfiles);

  const removeProfile = (id: string) => {
    setPillsProfile(prev => prev.filter(profile => profile.public_identifier !== id));
  };

  useEffect(() => {
    setPillsProfile(selectedProfiles);
  }, [selectedProfiles]);

  console.log('Profile Pills', profilePills);
  return (
    <div className={styles.selectedProfilesContainer}>
      <div className={styles.selected}>
        <h5 className={styles.select}>Selected Profiles</h5>
      </div>
      <div className={styles.profiles}>
        {profilePills.map(profile => (
          <div
            key={profile.public_identifier}
            className={styles.profileItem}
          >
            <div className={styles.innerContainer}>
              <div className={styles.container}>
                <ProfileImage
                  src={profile.profile_picture}
                  className={styles.profileImage}
                  alt={`${profile.first_name} ${profile.last_name}`}
                />
                <span className={styles.profileName}>
                  {profile.first_name} {profile.last_name}
                </span>
              </div>

              <button
                className={styles.close}
                onClick={() => removeProfile(profile.public_identifier)}
              >
                <Close size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
