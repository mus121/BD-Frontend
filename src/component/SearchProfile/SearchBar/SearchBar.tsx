import { useState } from 'react';
// import GlobalSearch from '@/component/GlobalSearch';
import Dropdown from '../../Dropdown/index';
import styles from './styles.module.scss';
import Search from '../../common/svg/Search';
import Close from '../../common/svg/Close';

type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
  setProfiles: any;
  searchQuery: any;
  setSearchQuery: any;
  setcurrentPage: any;
  setIsSearchActive: any;
};

function SearchBar({
  placeholder = 'Search...',
  onSearch,
  setProfiles,
  searchQuery,
  setSearchQuery,
  setcurrentPage,
  setIsSearchActive,
}: SearchBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showGlobalSearch, setShowGlobalSearch] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchQuery);
      setShowGlobalSearch(true);
      setIsDropdownOpen(false);
      setIsSearchActive(true);
    }
  };

  const handleClearInput = () => {
    setSearchQuery('');
    onSearch('');
    setIsDropdownOpen(false);
    setProfiles(null);
    setcurrentPage(0);
    setIsSearchActive(false);
  };

  const handleBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 200);
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
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={handleBlur}
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
