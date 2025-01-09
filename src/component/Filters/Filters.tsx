import { useState } from 'react';
import { useAppDispatch } from '@/hooks/rtk';
import { toggleFollowedFilter } from '@/store/slices/liConnectionProfiles';
import styles from './styles.module.scss';
import Downchevron from '../shared/svg/Downchevron';

function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');

  const dispatch = useAppDispatch();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    dispatch(toggleFollowedFilter(option === 'Following'));
  };

  return (
    <div className={styles.dropDown}>
      <button
        className={styles.toggleButton}
        onClick={toggleDropdown}
      >
        {selectedOption}{' '}
        <span className={styles.downChevron}>
          <Downchevron size={24} />
        </span>
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.li}>
            <button
              type='button'
              onClick={() => handleOptionClick('All')}
              className={styles.optionButton}
            >
              All
            </button>
          </li>
          <li className={styles.li}>
            <button
              type='button'
              onClick={() => handleOptionClick('Following')}
              className={styles.optionButton}
            >
              Following
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Filters;
