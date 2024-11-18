import styles from './Search.module.scss';
import Search from '../../common/svg/Search';

function SearchProfile() {
  return (
    <div className={styles.SearchBar}>
      <Search size={16} />
      <input
        type='text'
        placeholder='Search profiles (e.g., John Doe)'
        className={styles.SearchInput}
      />
    </div>
  );
}

export default SearchProfile;
