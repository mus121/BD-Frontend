import React, { useEffect, useState } from 'react';
import { getProfileSearch } from '@/api/getProfileSearch';
import { useQuery } from '@tanstack/react-query';
import { Profile, DropdownProps } from '@/types/dropdownProfile';
import ProfileItem from './ProfileItem/ProfileItem';
import styles from './styles.module.scss';

function Dropdown({ searchQuery, setSearchProfile }: DropdownProps) {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ['profileSearch', searchQuery],
    queryFn: () => getProfileSearch(searchQuery),
  });

  useEffect(() => {
    if (searchQuery.trim()) {
      setProfiles(data?.response?.data?.searchDashTypeaheadByGlobalTypeahead?.elements || []);
    } else {
      setProfiles([]);
    }
  }, [searchQuery, data]);

  if (!searchQuery.trim()) return null;

  return (
    <div className={styles.dropDown}>
      {profiles && profiles.length > 0 ? (
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <p>SEARCH RESULTS</p>
          </div>
          {profiles
            .filter(item => item.entityLockupView?.subtitle?.text)
            .map((item, index) => (
              <ProfileItem
                key={item.id || index}
                profile={item}
                onClick={() => setSearchProfile(item)}
              />
            ))}
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
