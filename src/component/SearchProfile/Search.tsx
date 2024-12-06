'use client';

import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';
import SearchBar from './SearchBar/index';
import { getProfileSearch } from '../../hooks/getProfileSearch';
import { Profile } from '../../types/ProfileList';

function SearchProfile({
  setProfiles,
}: {
  setProfiles: Dispatch<SetStateAction<Profile[] | null>>;
}) {
  const handleSearch = async (searchTerm: string) => {
    try {
      const profiles = await getProfileSearch(searchTerm);
      setProfiles(profiles);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      setProfiles(null); // Optionally reset on error.
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <SearchBar
        placeholder='Search profiles (e.g., John Doe)'
        onSearch={handleSearch}
        setProfiles={undefined}
      />
    </div>
  );
}

export default SearchProfile;
