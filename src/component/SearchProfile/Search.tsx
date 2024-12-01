'use client';

import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';
import SearchBar from './SearchBar/index';
import { getProfileSearch } from '../../hooks/useExtension';

function SearchProfile({ setProfiles }: { setProfiles: Dispatch<SetStateAction<null>> }) {
  const handleSearch = (searchTerm: string) => {
    getProfileSearch(searchTerm, setProfiles);
  };

  return (
    <div className={styles.Searchbarcontainer}>
      <SearchBar
        placeholder='Search profiles (e.g., John Doe)'
        onSearch={handleSearch}
      />
    </div>
  );
}

export default SearchProfile;
