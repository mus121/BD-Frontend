'use client';

import { Dispatch, SetStateAction } from 'react';
import { getGlobalProfileSearch } from '@/api/getGlobalProfiles';
import { useGetGlobalProfiles } from '@/hooks/useGetGlobalProfiles';
import styles from './styles.module.scss';
import SearchBar from './SearchBar/index';
import { getProfileSearch } from '../../api/getProfileSearch';
import { Profile } from '../../types/ProfileList';

function SearchProfile({
  setProfiles,
  searchQuery,
  setSearchQuery,
  setcurrentPage,
}: {
  setProfiles: Dispatch<SetStateAction<Profile[] | null>>;
  searchQuery: any;
  setSearchQuery: any;
  setcurrentPage: number;
}) {
  const handleSearch = async (searchTerm: string) => {
    try {
      const GlobalProfiles = await getGlobalProfileSearch(searchTerm);
      setProfiles(GlobalProfiles);
      // console.log('serachterm is ', searchTerm);
      // console.log({ profiles });
      // console.log({ data }, 'my data ');
    } catch (error) {
      console.error('Error fetching profiles:', error);
      setProfiles(null);
    }
  };

  // console.log({ setProfiles }, 'total profiles');
  return (
    <div className={styles.searchBarContainer}>
      <SearchBar
        placeholder='Search profiles (e.g., John Doe)'
        onSearch={handleSearch}
        setProfiles={setProfiles}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setcurrentPage={setcurrentPage}
      />
    </div>
  );
}

export default SearchProfile;
