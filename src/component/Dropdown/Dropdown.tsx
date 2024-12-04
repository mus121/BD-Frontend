import React, { useEffect, useState } from 'react';
import { getProfileSearch } from '@/hooks/getProfileSearch';
import { Profile, DropdownProps } from '@/types/dropdownProfile';
import ProfileItem from './ProfileItem/ProfileItem';
import styles from './styles.module.scss';

function Dropdown({ searchQuery, setSearchProfile }: DropdownProps) {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      getProfileSearch(searchQuery, response => {
        const profilesData =
          response?.response?.data?.searchDashTypeaheadByGlobalTypeahead?.elements || [];
        setProfiles(profilesData);
      });
    } else {
      setProfiles([]);
    }
  }, [searchQuery]);

  if (!searchQuery.trim()) return null;

  return (
    <div className={styles.dropDown}>
      {profiles.length > 0 ? (
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <p>SEARCH RESULTS</p>
          </div>
          {profiles
            .filter(profile => profile.entityLockupView?.subtitle?.text)
            .map((profile, index) => (
              <ProfileItem
                key={profile.id || index}
                profile={profile}
                onClick={profile => setSearchProfile(profile)}
              />
            ))}
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
