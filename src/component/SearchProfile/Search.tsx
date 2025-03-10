'use client';

import { getGlobalProfileSearch } from '@/api/getGlobalProfiles';
import { SearchBarProps } from '@/types/TSearchBarProps';
import styles from './styles.module.scss';
import SearchBar from './SearchBar/index';

function SearchProfile({
  setProfiles,
  searchQuery,
  setSearchQuery,
  setcurrentPage,
  setIsSearchActive,
}: SearchBarProps) {
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
