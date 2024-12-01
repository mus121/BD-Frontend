'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Search from '../../common/svg/Search';
import Close from '../../common/svg/Close';

type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

function SearchBar({ placeholder = 'Search...', onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  // Debounce the search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    onSearch(debouncedSearchQuery);
  }, [debouncedSearchQuery, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  const handleClearInput = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className={styles.Searchbar}>
      <Search size={16} />
      <input
        type='text'
        placeholder={placeholder}
        className={styles.Searchinput}
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {searchQuery && (
        <button
          className={styles.Clearbutton}
          onClick={handleClearInput}
          aria-label='Clear input'
        >
          <Close size={20} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
