import { useState, useEffect } from 'react';
import Dropdown from '../../Dropdown/index';
import styles from './styles.module.scss';
import Search from '../../common/svg/Search';
import Close from '../../common/svg/Close';

type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
  setProfiles: any;
};

function SearchBar({ placeholder = 'Search...', onSearch, setProfiles }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Debounce the search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 2000);
    // Open dropdown on input change
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchQuery);
      setIsDropdownOpen(false); // Close dropdown on enter
    }
  };

  const handleClearInput = () => {
    setSearchQuery('');
    onSearch('');
    setIsDropdownOpen(false); // Close dropdown on clear
  };

  const handleBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 200); // Delay to allow clicking dropdown items
  };

  return (
    <div className={styles.searchBarWrapper}>
      <div className={styles.searchBar}>
        <Search size={16} />
        <input
          type='text'
          placeholder={placeholder}
          className={styles.searchInput}
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsDropdownOpen(true)} // Open dropdown on focus
          onBlur={handleBlur} // Close dropdown when focus is lost
        />
        {searchQuery && (
          <button
            className={styles.clearButton}
            onClick={handleClearInput}
            aria-label='Clear input'
          >
            <Close size={20} />
          </button>
        )}
      </div>
      {isDropdownOpen && (
        <Dropdown
          searchQuery={searchQuery}
          setSearchProfile={setProfiles}
        />
      )}
    </div>
  );
}

export default SearchBar;
