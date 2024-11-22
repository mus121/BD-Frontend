import { useState } from 'react';
import styles from './styles.module.scss';
import Search from '../../common/svg/Search';
import Dropdown from '../dropdown/index';
// import { getProfileSearch } from '../../../hooks/useExtension';

function SearchProfile() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [profiles, setProfiles] = useState<any>(null);

  // const handleSearch = (searchTerm: string) => {
  //   getProfileSearch(searchTerm, setProfiles);
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsDropdownVisible(true);
  };

  const handleInputClick = () => {
    setIsDropdownVisible(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsDropdownVisible(false));
  };

  return (
    <div className={styles.Searchbarcontainer}>
      <div className={styles.Searchbar}>
        <Search size={16} />
        <input
          type='text'
          placeholder='Search profiles (e.g., John Doe)'
          // onKeyDown={e => {
          //   if (e.key === 'Enter') {
          //     handleSearch((e.target as HTMLInputElement).value);
          //   }
          // }}
          className={styles.Searchinput}
          value={searchQuery}
          onChange={handleInputChange}
          onClick={handleInputClick}
          onBlur={handleBlur}
        />
      </div>
      {/* <pre>{profiles ? JSON.stringify(profiles, null, 2) : 'No profiles found'}</pre> */}
      {isDropdownVisible && <Dropdown searchQuery={searchQuery} />}
    </div>
  );
}

export default SearchProfile;
