'use client';

import { useEffect, useState } from 'react';
import { useDropDownProfile } from '@/hooks/search';
import { useAppDispatch } from '@/hooks/rtk';
import { setProfiles } from '@/slices/connection';
import { DropDownProfiles, DropdownProps, ProfileSearchResponse } from '@/interfaces/dropDown';
import ProfileItem from './profileItem/profileItem';
import styles from './styles.module.scss';

function Dropdown({ searchQuery }: DropdownProps) {
  const [profiles, setProfile] = useState<DropDownProfiles[]>([]);
  const { data: dropDownProfiles = [] } = useDropDownProfile(searchQuery);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchQuery.trim()) {
      const responseProfiles = Array.isArray((dropDownProfiles as ProfileSearchResponse)?.response)
        ? (dropDownProfiles as ProfileSearchResponse).response
        : [];
      setProfile(responseProfiles);
    } else {
      setProfile([]);
    }
  }, [searchQuery, dropDownProfiles]);

  if (!searchQuery.trim()) return null;

  const clickProfiles = (index: any) => {
    if (searchQuery.trim() && dropDownProfiles) {
      const responseProfiles = Array.isArray((dropDownProfiles as ProfileSearchResponse)?.response)
        ? (dropDownProfiles as ProfileSearchResponse).response
        : [];
      dispatch(setProfiles(responseProfiles[index]));
    }
  };
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
              onClick={() => clickProfiles(index)}
            />
          ))}
        </div>
      ) : (
        <div className={styles.noResults} />
      )}
    </div>
  );
}

export default Dropdown;
