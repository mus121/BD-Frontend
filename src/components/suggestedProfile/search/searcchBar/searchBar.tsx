import { useState } from 'react';
import { useAppDispatch } from '@/hooks/rtk';
import { SearchBarV2Props } from '@/interfaces/search';
import Search from '../../../shared/svg/Search';
import Close from '../../../shared/svg/Close';
import styles from './styles.module.scss';

export default function SearchBar({ placeholder = 'Search...', onSearch }: SearchBarV2Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDropdownOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
    }
  };

  const handleClearInput = () => {
    onSearch('');
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
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={handleBlur}
        />

        {/* <button
          className={styles.clearButton}
          onClick={handleClearInput}
          aria-label='Clear input'
        >
          <Close size={20} />
        </button> */}
      </div>
    </div>
  );
}
