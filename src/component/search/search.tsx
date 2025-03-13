'use client';

import { fetchGlobalProfile } from '@/api/search';
import { SearchBarProps } from '@/interfaces/searchBarProp';
import styles from './styles.module.scss';
import SearchBar from './profileSearch/index';

export default function SearchProfile({
  setProfiles,
  searchQuery,
  setSearchQuery,
  setcurrentPage,
  setIsSearchActive,
}: SearchBarProps) {
  const handleSearch = async (searchTerm: string) => {
    try {
      const GlobalProfiles = await fetchGlobalProfile(searchTerm);
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
