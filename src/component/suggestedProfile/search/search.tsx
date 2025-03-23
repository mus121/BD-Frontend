'use client';

import styles from './styles.module.scss';
import SearchBar from './searcchBar/index';

export default function SearchProfile() {
  const handleSearch = async (searchTerm: string) => {};
  return (
    <div className={styles.searchBarContainer}>
      <SearchBar
        placeholder='Search profiles '
        onSearch={handleSearch}
      />
    </div>
  );
}
