import { useState } from 'react';
import styles from './styles.module.scss';
import Downchevron from '../common/svg/Downchevron';

function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
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
          <li
            onClick={() => handleOptionClick('All')}
            className={styles.li}
          >
            <span className={styles.all}>All</span>
          </li>
          <li
            onClick={() => handleOptionClick('Following')}
            className={styles.li}
          >
            <span className={styles.all}>Following</span>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Filters;
