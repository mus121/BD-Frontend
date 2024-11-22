import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

interface DropdownProps {
  searchQuery: string;
}

// eslint-disable-next-line react/function-component-definition
const Dropdown: React.FC<DropdownProps> = ({ searchQuery }) => {
  const recentSearches = ['John Johnson', 'John Michael', 'John Steve'];
  const contacts = [
    { name: 'John Steve', role: 'UX Designer @ Qlu.ai' },
    { name: 'John Mike', role: 'UX Designer @ Qlu.ai' },
    { name: 'John KG', role: 'UX Designer @ Affinity' },
  ];

  return (
    <div className={styles.Dropdown}>
      <div className={styles.Section}>
        <div className={styles.Sectiontitle}>
          <p>REECENT SEARCH</p>
        </div>
        {recentSearches.map((item, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={styles.Item}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <hr className={styles.hr} />
      <div className={styles.Section}>
        <div className={styles.Sectiontitle}>
          <p>CONTACTS AND FOLLOWED</p>
        </div>
        {contacts.map((contact, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={styles.Item}
          >
            <Image
              src='/assets/images/Avatar.png'
              alt='Profile'
              width={24}
              height={24}
              className={styles.Profileimg}
            />
            <span className={styles.Contactname}>{contact.name}</span>
            <span className={styles.Contactrole}>{contact.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
