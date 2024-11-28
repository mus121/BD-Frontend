'use client';

import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Search from '../../common/svg/Search';
import Dropdown from '../dropdown/index';
import { getProfileSearch } from '../../../hooks/useExtension';

function SearchProfile({ setProfiles }: { setProfiles: Dispatch<SetStateAction<null>> }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  // Debounce the search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch profiles based on the debounced search query
  useEffect(() => {
    if (debouncedSearchQuery) {
      getProfileSearch(debouncedSearchQuery, setProfiles);
    }
  }, [debouncedSearchQuery, setProfiles]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsDropdownVisible(true);
  };

  // Handle search on pressing Enter
  const handleSearch = (searchTerm: string) => {
    getProfileSearch(searchTerm, setProfiles);
  };

  // Handle input focus
  const handleInputClick = () => {
    setIsDropdownVisible(true);
  };

  // Handle input blur
  const handleBlur = () => {
    setTimeout(() => setIsDropdownVisible(false), 200);
  };

  return (
    <div className={styles.Searchbarcontainer}>
      <div className={styles.Searchbar}>
        <Search size={16} />
        <input
          type='text'
          placeholder='Search profiles (e.g., John Doe)'
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSearch((e.target as HTMLInputElement).value);
            }
          }}
          className={styles.Searchinput}
          value={searchQuery}
          onChange={handleInputChange}
          onClick={handleInputClick}
          onBlur={handleBlur}
        />
      </div>
      {isDropdownVisible && <Dropdown searchQuery={debouncedSearchQuery} />}
    </div>
  );
}

export default SearchProfile;
