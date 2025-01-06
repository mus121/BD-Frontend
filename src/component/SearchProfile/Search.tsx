'use client';

import { Dispatch, SetStateAction } from 'react';
import { getGlobalProfileSearch } from '@/api/getGlobalProfiles';
import styles from './styles.module.scss';
import SearchBar from './SearchBar/index';
import { Profile } from '../../types/ProfileList';

function SearchProfile({
  setProfiles,
  searchQuery,
  setSearchQuery,
  setcurrentPage,
  setIsSearchActive,
}: {
  setProfiles: Dispatch<SetStateAction<Profile[] | null>>;
  searchQuery: any;
  setSearchQuery: any;
  setcurrentPage: any;
  setIsSearchActive: any;
}) {
  const handleSearch = async (searchTerm: string) => {
    try {
      const GlobalProfiles = await getGlobalProfileSearch(searchTerm);
      setProfiles(GlobalProfiles);
    } catch (error) {
      setProfiles(null);
    }
  };
  return (
    <div className={styles.searchBarContainer}>
      <SearchBar
        placeholder='Search profiles (e.g., John Doe)'
        onSearch={handleSearch}
        setProfiles={setProfiles}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setcurrentPage={setcurrentPage}
        setIsSearchActive={setIsSearchActive}
      />
    </div>
  );
}

export default SearchProfile;
