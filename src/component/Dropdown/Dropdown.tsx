import { useEffect, useState } from 'react';
import { useGetDropDownSearch } from '@/hooks/useGetDropDownSearch';
import { Profile, DropdownProps, ProfileSearchResponse } from '@/types/dropdownProfile';
import ProfileItem from './ProfileItem/ProfileItem';
import styles from './styles.module.scss';

function Dropdown({ searchQuery, setSearchProfile }: DropdownProps) {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const { data: dropDownProfiles = [] } = useGetDropDownSearch(searchQuery);

  useEffect(() => {
    if (searchQuery.trim()) {
      const responseProfiles = Array.isArray((dropDownProfiles as ProfileSearchResponse)?.response)
        ? (dropDownProfiles as ProfileSearchResponse).response
        : [];
      setProfiles(responseProfiles);
    } else {
      setProfiles([]);
    }
  }, [searchQuery, dropDownProfiles]);

  if (!searchQuery.trim()) return null;

  return (
    <div className={styles.dropDown}>
      {Array.isArray(profiles) && profiles.length > 0 ? (
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <p>SEARCH RESULTS</p>
          </div>
          {profiles.map((item, index) => (
            <ProfileItem
              key={item.id || index}
              profile={item}
              onClick={() => setSearchProfile(item)}
            />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <p>No results found</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
