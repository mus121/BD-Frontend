'use client';

import { useEffect, useState } from 'react';
import { useGetDropDownSearch } from '@/hooks/useGetDropDownSearch';
import { useAppDispatch } from '@/hooks/rtk';
import { setDropDownProfiles } from '@/store/slices/dropDownProfiles';
import { DropDownProfiles, DropdownProps, ProfileSearchResponse } from '@/types/TDropDownProfiles';
import ProfileItem from './ProfileItem/ProfileItem';
import styles from './styles.module.scss';

function Dropdown({ searchQuery }: DropdownProps) {
  const [profiles, setProfiles] = useState<DropDownProfiles[]>([]);
  const { data: dropDownProfiles = [] } = useGetDropDownSearch(searchQuery);
  const dispatch = useAppDispatch();

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

  const clickProfiles = (index: any) => {
    if (searchQuery.trim() && dropDownProfiles) {
      const responseProfiles = Array.isArray((dropDownProfiles as ProfileSearchResponse)?.response)
        ? (dropDownProfiles as ProfileSearchResponse).response
        : [];
      dispatch(setDropDownProfiles(responseProfiles[index]));
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
